import { RECEIVE_QUESTIONS, TOGGLE_VOTE } from '../actions/questions'

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
      console.log(answer),
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
    default :
      return state
  }
}