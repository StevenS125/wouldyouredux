import { RECEIVE_QUESTIONS, TOGGLE_VOTE, ADD_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case TOGGLE_VOTE :
      const { authedUser, qid, answer } = action;
      console.log(qid)
      console.log(answer)
      console.log(authedUser)
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    case ADD_QUESTION :
      const { question } = action
      return {
        ...state,
          [question.id]: question
      };
    default :
      return state
  }
}