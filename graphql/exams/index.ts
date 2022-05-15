import { gql } from '@apollo/client';

export const CHECK_PUBLISHED_EXAM = gql`
  query checkPublishedExam($enterCode: String!) {
    Exam(where: { code: { _eq: $enterCode }, status: { _eq: true } }) {
      id
    }
  }
`;
