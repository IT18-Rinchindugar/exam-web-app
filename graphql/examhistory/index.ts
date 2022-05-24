import { gql } from '@apollo/client';

export const CREATE_EXAM_HISTORY_MUTATION = gql`
  mutation createExamHistory(
    $answer: Boolean!
    $answerMinute: String!
    $questionId: uuid!
    $userId: uuid!
  ) {
    checkAnswer(
      answer: {
        answer: $answer
        answerMinute: $answerMinute
        questionId: $questionId
        userId: $userId
      }
    ) {
      isCorrected
    }
  }
`;
