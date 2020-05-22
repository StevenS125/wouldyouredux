import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle } from 'reactstrap';
import Choices from './Choices'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quest1Val: 0,
      quest2Val: 0
    };
  }


  render() {
      const { questionIDs } = this.props
        console.log(this.props)
    let pop = questionIDs.map((ids, index) => {
            return <div key={index} style={{width: '80%', marginLeft:'10%', marginRight:'10%' }}>
                    <Card style={{ width:'100%', textAlign:'left' }}>
                      <CardTitle style={{ textAlign:'center' }}>Would You Rather?</CardTitle>
                          <Choices id={ids} />
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