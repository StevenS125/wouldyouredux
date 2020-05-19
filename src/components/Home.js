import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
      const { questionIDs, questions } = this.props
        console.log(this.props.questions)
    let pop = questionIDs.map((ids) => {
            return <div>{questions[ids].optionOne.text}</div>
        })
    return (
        <div>
      <h1>red</h1>
      {pop}
      </div>
    );
  }
}

function mapStateToProps ({ questions }) {

    return {
      questionIDs: Object.keys(questions),
      questions: questions
    }
  }

  export default connect(mapStateToProps)(Home)