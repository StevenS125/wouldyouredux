import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardImg, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import Choices from './Choices'
import classnames from 'classnames';

class Home extends Component {
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
      const { questions, questionIDs, authedUser, users } = this.props

      let answered = questionIDs.map((ids, index) => {
        if (questions[ids].optionOne.votes.includes(authedUser) || questions[ids].optionTwo.votes.includes(authedUser)) {
        const getAuthorImg = users[questions[ids].author].avatarURL
        const getAuthorName = users[questions[ids].author].name

        return <div key={index} style={{width: '100%', marginBottom: 10}}>
                <Card style={{ width:'100%', textAlign:'left' }}>
                <CardImg className='avatar' top src={getAuthorImg} alt={getAuthorName} />
                  <CardTitle style={{ textAlign:'center' }}>Would You Rather?</CardTitle>
                      <Choices id={ids} />
              </Card>
          </div>
        } 
        return null
         })

         let unAnswered = questionIDs.map((ids, index) => {
          if (!questions[ids].optionOne.votes.includes(authedUser) && !questions[ids].optionTwo.votes.includes(authedUser)) {
          const getAuthorImg = users[questions[ids].author].avatarURL
          const getAuthorName = users[questions[ids].author].name
  
          return <div key={index} style={{width: '100%', marginBottom: 10}}>
                  <Card style={{ width:'100%', textAlign:'left' }}>
                  <CardImg className='avatar' top src={getAuthorImg} alt={getAuthorName} />
                    <CardTitle style={{ textAlign:'center' }}>Would You Rather?</CardTitle>
                        <Choices id={ids} />
                </Card>
            </div>
          } 
          return null
           })
        

        let answeredQuestions = authedUser ? answered: 
            <div>
                 <h1>Please Login to See individual results</h1> 
            </div>

        let unAnsweredQuestions = authedUser ? unAnswered: 
            <div>
                 <h1>Please Login to See individual results</h1> 
            </div>

    return (
        <div>
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => this.toggle('1')}
          >
            UnAnswered Questions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => this.toggle('2')}
          >
            Answered Questions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {unAnsweredQuestions}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {answeredQuestions}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser, users }) {

    return {
      questionIDs: Object.keys(questions),
      questions,
      authedUser,
      users
    }
  }

  export default connect(mapStateToProps)(Home)