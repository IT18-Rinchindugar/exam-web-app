import TextInput from '@/components/elements/form/textinput';
import { ArrowRightIcon } from '@/components/elements/icons';
import { Heading, Paragraph } from '@/components/elements/typography';
import Layout from '@/components/layouts/main/MainLayout';
import { Formik } from 'formik';
import { useInsertTestUserOneMutation } from 'generated/graphql';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
const FormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Хэрэглэгчийн нэр богино байна!')
    .required('Заавал оруулах'),
});

const EventPage = ({ examId }: any) => {
  const router = useRouter();
  const [savingTestUser, { data, loading }] = useInsertTestUserOneMutation();
  const onSubmit = async (values: any) => {
    savingTestUser({
      variables: { ...values, examId },
    }).then((res) => {
      const data = res.data?.insert_TestUser_one;
      localStorage.setItem('userExam', JSON.stringify(data));
      router.push(`/events/${data?.exam_id}`);
    });
  };
  return (
    <Layout>
      <article className="flex justify-center mt-10">
        <section className="w-[30rem] bg-[#131313] p-4 rounded">
          <Heading
            type="h5"
            label="Өөрийн нэрийг оруулна уу...."
            color="color-1"
          />
          <section className="h-full">
            <Formik
              initialValues={{ name: '' }}
              validationSchema={FormValidationSchema}
              onSubmit={onSubmit}
            >
              {({ values, errors, touched, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <section className="mt-2 shadow w-full rounded-full flex flex-row justify-between items-center">
                    <TextInput
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      placeholder="Өөрийн нэр ..."
                      className="rounded h-12 !h3"
                    />
                  </section>
                  {errors.name && touched.name && (
                    <section className="flex justify-center">
                      <Paragraph
                        type="p2"
                        label={errors.name}
                        className="!text-[#fa6056] mt-2"
                      />
                    </section>
                  )}
                  <section className="flex justify-center mt-4">
                    <button
                      className="bg-[#39ac37] p-1 rounded-full mr-1"
                      type="submit"
                    >
                      <ArrowRightIcon />
                    </button>
                  </section>
                </form>
              )}
            </Formik>
          </section>
        </section>
      </article>
    </Layout>
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
