import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Heading, Paragraph } from '@/components/elements/typography';
import Layout, { BaseLayout } from '@/components/layouts/main/MainLayout';
import ReactLoading from 'react-loading';
import Image from 'next/image';
import {
  useGetExamByPkSubscription,
  useGetTestUserByExamIdSubscription,
  useGetTestUserByPkLazyQuery,
} from 'generated/graphql';
import Modal from '@/components/elements/modal';
import ExamProcessing from '@/components/modules/exam/ExamProcessing';

const EventPage = ({ examId }: any) => {
  const router = useRouter();
  const [startCount, setStartCount] = useState(5);

  const [getTestUser, { data: userData, loading: userLoading }] =
    useGetTestUserByPkLazyQuery();

  const {
    loading: usersLoading,
    data: usersData,
    error,
  } = useGetTestUserByExamIdSubscription({
    variables: { examId },
  });

  const {
    loading: examLoading,
    data: examData,
    error: examError,
  } = useGetExamByPkSubscription({
    variables: { examId },
  });

  useEffect(() => {
    if (startCount !== 0 && examData?.Exam_by_pk?.status === 'starting') {
      const interval = setInterval(() => {
        let count = startCount - 1;
        setStartCount(count);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startCount, examData]);

  useEffect(() => {
    const userInfo = localStorage.getItem('userExam');
    if (userInfo) {
      const userExam = JSON.parse(userInfo);
      getTestUser({
        variables: { userId: userExam.id },
      }).then((res) => {
        if (res.data?.TestUser_by_pk) {
          //   return setUsername(false);
        }
        // return setUsername(true);
      });
    }
  }, [getTestUser]);

  const pageLoading = usersLoading || examLoading || userLoading;

  const renderContent = () => (
    <section className="flex flex-col items-center mx-[10rem]">
      <section className="mt-10">
        <Heading
          type="h1"
          label={examData?.Exam_by_pk?.name || 'Шалгалт'}
          color="color-1"
        />
      </section>
      <section className="w-[30rem] bg-[#131313] p-5 rounded-2xl my-10 flex flex-row items-center">
        <Image
          src="/avatar.jpg"
          width={50}
          height={50}
          className="rounded-full"
        />
        <section className="ml-4">
          <Heading
            type="h3"
            color="color-1"
            label={userData?.TestUser_by_pk?.name || 'Guest'}
          />
          <Paragraph type="p2" color="color-1" label="You" />
        </section>
      </section>
      {examData?.Exam_by_pk?.status === 'waiting' && (
        <section>
          <Heading
            type="h4"
            label="Waiting for the host to start..."
            color="color-1"
          />
        </section>
      )}
      <div className="bg-white w-full my-6 divide-y" />

      <section>
        <Heading
          type="h4"
          label={`You are playing with ${
            usersData?.TestUser.length || 0
          } other player`}
          color="color-1"
        />
      </section>
      <section className="flex flex-wrap justify-start">
        {usersData?.TestUser.map((testUser) => (
          <section className="bg-[#131313] p-5 !pr-8 rounded-2xl my-10 flex flex-row items-center mr-8">
            <Image
              src="/avatar.jpg"
              width={50}
              height={50}
              className="rounded-full"
            />
            <section className="ml-4">
              <Heading type="h3" color="color-1" label={testUser.name} />
            </section>
          </section>
        ))}
      </section>
    </section>
  );

  const renderComponent = () => {
    if (pageLoading) {
      return (
        <div className="flex h-full justify-center items-center">
          <ReactLoading type="spinningBubbles" color="#fff" />
        </div>
      );
    }

    if (startCount === 0 && examData?.Exam_by_pk?.status === 'starting') {
      return (
        <div className="flex h-full justify-center items-center">
          <ExamProcessing
            testId={examData.Exam_by_pk.test_id}
            activeIndex={examData.Exam_by_pk.activeTextIndex || 0}
          />
        </div>
      );
    }
    return renderContent();
  };

  return (
    <BaseLayout>
      <article className="!bg-[#461b42] h-screen">
        {renderComponent()}
        <Modal
          isOpen={
            startCount !== 0 && examData?.Exam_by_pk?.status === 'starting'
          }
          closeModal={() => {}}
          className="flex items-center justify-center"
        >
          <section className="flex h-[12.5rem] w-[13.5rem] rounded-2xl transform flex-col justify-center items-center bg-color-white p-6 shadow-xl transition-all">
            <Heading type="hero" label={`${startCount}`} color="background" />
          </section>
        </Modal>
      </article>
    </BaseLayout>
  );
};

export const getServerSideProps = async (props: any) => {
  const { id } = props.query;
  return {
    props: {
      examId: id,
    },
  };
};

export default EventPage;
