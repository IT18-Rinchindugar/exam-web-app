import React from 'react';
import { Heading } from '@/components/elements/typography';

type ExamFinishedProps = {
  testId: string;
};

const ExamFinished = ({ testId }: ExamFinishedProps) => {
  return (
    <div className="w-full h-5/6">
      <div className="w-full h-1/2 bg-black rounded-2xl p-4 flex justify-center items-center">
        <div className="mx-10">
          <Heading
            type="hero"
            label={testId}
            color="color-1"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ExamFinished;
