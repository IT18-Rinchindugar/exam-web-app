import { Heading } from '@/components/elements/typography';
import React from 'react';

type ExamProcessingProps = {
  text: string;
};
const ExamProcessing = () => {
  return (
    <div className="w-full h-5/6 flex flex-col m-8">
      <div className="w-full h-1/2 bg-black rounded-2xl p-4 flex justify-center items-center">
        <div className="mx-10">
          <Heading
            type="hero"
            label="Миний хувьд гиюүрсэн, хоосон мөрөөдсөн байдалтай байх нь элбэг... Миний хувьд гиюүрсэн, хоосон мөрөөдсөн байдалтай байх нь элбэг..."
            color="color-1"
            className="text-center"
          />
        </div>
      </div>
      <div className="mt-6 h-1/2 flex flex-row items-center justify-between rounded-2xl p-4">
        <button className="bg-red-600 h-full rounded-2xl w-2/3 mr-8">
          <Heading
            type="hero"
            label="Худал"
            color="color-1"
            className="text-center"
          />
        </button>
        <button className="w-2/3 bg-[#4caf50] h-full rounded-2xl">
          <Heading
            type="hero"
            label="Үнэн"
            color="color-1"
            className="text-center"
          />
        </button>
      </div>
    </div>
  );
};

export default ExamProcessing;
