import Modal from '@/components/elements/modal';
import { Heading } from '@/components/elements/typography';
import {
  useActiveGetQuestionByPkSubscription,
  useCreateExamHistoryMutation,
} from 'generated/graphql';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type ExamProcessingProps = {
  activeIndex: number;
  testId: string;
};

const ExamProcessing = ({ activeIndex, testId }: ExamProcessingProps) => {
  const toastId = React.useRef<any>(null);

  const notify = (loading: boolean) =>
    (toastId.current = toast('Хариултыг шалгаж байна', {
      isLoading: loading,
      closeButton: false,
      draggable: false,
      closeOnClick: false,
      pauseOnHover: false,
    }));

  // Question
  const [nextQuestion, setNextQuestion] = useState(false);
  const [startCount, setStartCount] = useState(5);

  const [startTime, setStartTime] = useState<any>();
  const [answer, setAnswer] = useState<any>(null);
  const [isCorrected, setIsCorrected] = useState<any>(null);
  const { data, loading } = useActiveGetQuestionByPkSubscription({
    variables: { testId: testId },
  });

  const [
    savingExamHistory,
    { data: examHistoryData, loading: examLoadingData },
  ] = useCreateExamHistoryMutation();

  useEffect(() => {
    if (startCount !== 0) {
      const timer = setTimeout(() => {
        setStartCount(startCount - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const date = new Date();
      setStartTime(date);
      setNextQuestion(false);
    }
  }, [startCount]);

  useEffect(() => {
    toast.dismiss();
    if (isCorrected !== null) {
      if (isCorrected) {
        toast.success('Та зөв хариулсан!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error('Буруу хариулсан!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      setAnswer(null);
      setNextQuestion(true);
      setStartCount(5);
    }
  }, [activeIndex]);

  const onSubmit = async (answer: boolean) => {
    const endTime = new Date();
    var mins = moment
      .utc(moment(endTime, 'HH:mm:ss').diff(moment(startTime, 'HH:mm:ss')))
      .format('mm:ss');
    const userInfo = localStorage.getItem('userExam');
    if (userInfo) {
      const userExam = JSON.parse(userInfo);
      savingExamHistory({
        variables: {
          answer,
          answerMinute: mins,
          questionId: data?.Question[activeIndex].id,
          userId: userExam.id,
        },
      }).then((res) => {
        notify(true);
        setAnswer(answer);
        setIsCorrected(res.data?.checkAnswer?.isCorrected);
        console.log(res.data?.checkAnswer?.isCorrected);
      });
    }
  };

  return (
    <div className="w-full h-5/6">
      <div className="h-full flex flex-col m-8">
        <div className="w-full h-1/2 bg-black rounded-2xl p-4 flex justify-center items-center">
          <div className="mx-10">
            <Heading
              type="hero"
              label={data?.Question[activeIndex].text || ''}
              color="color-1"
              className="text-center"
            />
          </div>
        </div>
        <div className="mt-6 h-1/2 flex flex-row items-center justify-between rounded-2xl p-4">
          <button
            disabled={answer !== null}
            onClick={() => onSubmit(false)}
            className={`bg-red-600  ${
              answer === null ? 'hover:bg-red-700' : 'opacity-70'
            } active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 h-full rounded-2xl w-2/3 mr-8`}
          >
            <Heading
              type="hero"
              label="Худал"
              color="color-1"
              className="text-center"
            />
          </button>
          <button
            disabled={answer !== null}
            onClick={() => onSubmit(true)}
            className={`w-2/3 bg-[#4caf50] ${
              answer === null ? 'hover:bg-[#367e39]' : 'opacity-70'
            } active:bg-[#4caf50]00 focus:outline-none focus:ring focus:ring-[#4caf50] h-full rounded-2xl`}
          >
            <Heading
              type="hero"
              label="Үнэн"
              color="color-1"
              className="text-center"
            />
          </button>
        </div>
      </div>
      <Modal
        isOpen={nextQuestion}
        closeModal={() => {}}
        className="flex items-center justify-center"
        opacity={100}
      >
        <section className="flex h-[12.5rem] w-[13.5rem] rounded-2xl transform flex-col justify-center items-center bg-color-white p-6 shadow-xl transition-all">
          <Heading type="hero" label={`${startCount}`} color="background" />
        </section>
      </Modal>
    </div>
  );
};

export default ExamProcessing;
