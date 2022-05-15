import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Heading } from '@/components/elements/typography';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Шалгалтын веб</title>
      <meta name="description" content="Шалгалтын веб" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Heading
        type="h4"
        label="Шалгалтын веб"
        color="primary"
        className="text-teal-30"
      />
    </main>
  </div>
);

export default Home;
