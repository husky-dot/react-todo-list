import React, {Component, PureComponent, memo} from 'react'
import logo from './logo.svg'
import './App.css'

const Foo = memo(function Foo (props) {
  console.log('Foo render');
  return <div>{props.person.age}</div>;
})


class App extends Component {
  state = {
    person: {
      age: 1
    }
  }
  callBack = () => {}
  render() {
    const {person} = this.state;
    return (
      <div>
        <button 
          onClick={() => {
            this.setState({count: this.state.count + 1})
          }}>
          Add
        </button>
        <Foo person={person} cb={this.callBack}/>
      </div>
    );
  }
}

export default App;