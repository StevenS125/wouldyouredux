import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const TOGGLE_VOTE = 'TOGGLE_VOTE'

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

  export function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question,
    }
  }

  export function handleAddQuestion (optionOneText, optionTwoText ) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
    
      dispatch(showLoading())
  
      return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser
      })
        .then((question) => {
        dispatch(addQuestion(question))})
        .then(() => dispatch(hideLoading()))
    }
  }

function toggleVote ({ authedUser, qid, answer }) {
  return {
    type: TOGGLE_VOTE,
    qid,
    authedUser,
    answer
    
  }
}

export function handleToggleVote ({authedUser, qid, answer}) {
  console.log(authedUser)
  console.log(qid)
  console.log(answer)
  return (dispatch) => {
    dispatch(toggleVote({authedUser, qid, answer}))

    return saveQuestionAnswer({authedUser, qid, answer})
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e)
        dispatch(toggleVote(authedUser, qid, answer))
        alert('The was an error liking the tweet. Try again.')
      })
  }
}