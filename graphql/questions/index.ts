import { gql } from '@apollo/client';

export const GET_QUESTION_BY_PK_MUTATION = gql`
  subscription activeGetQuestionByPk($testId: uuid!) {
    Question(
      limit: 10
      where: { test_id: { _eq: $testId } }
      order_by: { level: asc }
    ) {
      text
      level
      point
      description
      id
    }
  }
`;
