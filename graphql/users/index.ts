import { gql } from '@apollo/client';

export const INSERT_TEST_USER_MUTATION = gql`
  mutation insertTestUserOne($examId: uuid, $name: String!) {
    insert_TestUser_one(object: { exam_id: $examId, name: $name }) {
      id
      last_seen
      name
      exam_id
    }
  }
`;

export const GET_TEST_USER_SUBSCRIPTION = gql`
  subscription GetTestUserByExamId($examId: uuid!) {
    TestUser(where: { exam_id: { _eq: $examId } }) {
      name
    }
  }
`;

export const GET_TEST_USER_BY_PK = gql`
  query getTestUserByPk($userId: uuid!) {
    TestUser_by_pk(id: $userId) {
      exam {
        status
      }
      last_seen
      name
    }
  }
`;
