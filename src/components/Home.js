import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import Example from './questButtons'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quest1Val: 0,
      quest2Val: 0
    };
  }
  render() {
      const { questionIDs, questions } = this.props
        console.log(this.props.questions)
    let pop = questionIDs.map((ids, index) => {
            return <div key={index} style={{width: '50%', margin:'0, 25%' }}>
                    <Card style={{ width:'100%', textAlign:'left' }}>
                      <CardTitle style={{ textAlign:'center' }}>Would You Rather?</CardTitle>
                          <Example optOne={questions[ids].optionOne.text} optTwo={questions[ids].optionTwo.text} />
                  </Card>
              </div>
        })
    return (
        <div>
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