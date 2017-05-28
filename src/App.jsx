import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'November 18, 2017',
            newDeadline: ''
        }
    }

    changeDeadline(e) {
        e.preventDefault()
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return(
            <div className="App">
              <div className="App-title">
                Countdown to {this.state.deadline}
              </div>
              <Clock
                deadline={this.state.deadline}
              />
              <Form onSubmit={(e) => this.changeDeadline(e)} inline>
                <FormControl
                  className="Deadline-input"
                  placeholder='new date'
                  onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <Button onClick={(e) => this.changeDeadline(e)}>
                  Submit
                </Button>
              </Form>
            </div>
        )
    }
}

export default App;
