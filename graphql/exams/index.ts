import { gql } from '@apollo/client';

export const CHECK_PUBLISHED_EXAM = gql`
  query checkPublishedExam($enterCode: String!) {
    Exam(where: { code: { _eq: $enterCode } }) {
      id
    }
  }
`;

export const GET_EXAM_BY_PK_MUTATION = gql`
  subscription getExamByPk($examId: uuid!) {
    Exam_by_pk(id: $examId) {
      status
      name
      test_id
    }
  }
`;
