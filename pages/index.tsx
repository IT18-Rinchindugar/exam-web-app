import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Heading, Paragraph } from '@/components/elements/typography';
import AppParticle from '@/components/elements/particle';
import TextInput from '@/components/elements/form/textinput';
import { ArrowRightIcon } from '@/components/elements/icons';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Шалгалтын веб</title>
      <meta name="description" content="Шалгалтын веб" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="h-screen-100">
      <AppParticle />
      <article className="h-full flex justify-center items-center">
        <section className="p-2 shadow rounded-full w-96 flex flex-row justify-between items-center">
          <Heading type="h4" label="#" color="background" className="ml-1" />
          <TextInput
            name="enterCode"
            placeholder="Шалтгалтын код"
            className="rounded-full uppercase"
          />
          <button className="bg-[#39ac37] p-1 rounded-full mr-1">
            <ArrowRightIcon />
          </button>
        </section>
      </article>
    </main>
  </div>
);

export default Home;
