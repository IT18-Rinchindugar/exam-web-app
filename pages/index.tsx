import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Yup from 'yup';
import { Heading, Paragraph } from '@/components/elements/typography';
import AppParticle from '@/components/elements/particle';
import TextInput from '@/components/elements/form/textinput';
import { ArrowRightIcon } from '@/components/elements/icons';
import { Formik } from 'formik';
import { useCheckPublishedExamLazyQuery } from 'generated/graphql';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const FormValidationSchema = Yup.object().shape({
  enterCode: Yup.string()
    .min(6, 'Шалтгалтын код оруулна уу!')
    .required('Заавал оруулах'),
});

const Home: NextPage = () => {
  const router = useRouter();
  const [checkPublishedExam, { data, loading }] =
    useCheckPublishedExamLazyQuery();

  const onSubmit = async (values: any) => {
    checkPublishedExam({
      variables: { enterCode: values.enterCode.toUpperCase() },
    }).then((res) => {
      if (res.data?.Exam.length === 0) {
        toast.error('Уг кодтой шалгалт олдсонгүй!!!');
        return;
      }
      toast.success('Амжилттай нэвтрэсэн :)');
      return router.push(`/joins/${res.data?.Exam[0].id}`);
    });
  };

  return (
    <div>
      <Head>
        <title>Шалгалтын веб</title>
        <meta name="description" content="Шалгалтын веб" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen-100">
        <AppParticle />
        <article className="h-full flex justify-center items-center">
          <Formik
            initialValues={{ enterCode: '' }}
            validationSchema={FormValidationSchema}
            onSubmit={onSubmit}
          >
            {({ values, errors, touched, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <section className="p-2 shadow rounded-full w-96 flex flex-row justify-between items-center">
                  <Heading
                    type="h4"
                    label="#"
                    color="background"
                    className="ml-1"
                  />
                  <TextInput
                    onChange={handleChange}
                    value={values.enterCode}
                    name="enterCode"
                    placeholder="Шалтгалтын код"
                    className="rounded-full uppercase"
                  />
                  <button
                    className="bg-[#39ac37] p-1 rounded-full mr-1"
                    type="submit"
                  >
                    <ArrowRightIcon />
                  </button>
                </section>
                {errors.enterCode && touched.enterCode && (
                  <section className="flex justify-center">
                    <Paragraph
                      type="p2"
                      label={errors.enterCode}
                      className="!text-[#fa6056] mt-2"
                    />
                  </section>
                )}
              </form>
            )}
          </Formik>
        </article>
      </main>
    </div>
  );
};

export default Home;
