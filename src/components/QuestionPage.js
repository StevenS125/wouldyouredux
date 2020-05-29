import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardImg } from 'reactstrap';
import Choices from './Choices'


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    };
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    };
  }

  render() {
      const { id, questions, users } = this.props

      const getAuthorImg = questions[id] ? users[questions[id].author].avatarURL : null
      const getAuthorName = questions[id] ? users[questions[id].author].name : null
     
    return (
        <div style={{width: '100%', marginBottom: 10}}>
                <Card style={{ width:'100%', textAlign:'left' }}>
                    { questions[id] &&
                        <div>
                <CardImg className='avatar' top src={getAuthorImg} alt={getAuthorName} />
                  <CardTitle style={{ textAlign:'center' }}>Would You Rather?</CardTitle>
                      <Choices id={id} />
                      </div>
                }
              </Card>
          </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser, users }, props) {
    const { id } = props.match.params
    console.log(id)

    return {
      questionIDs: Object.keys(questions),
      questions,
      authedUser,
      users,
      id
    }
  }

  export default connect(mapStateToProps)(Question)