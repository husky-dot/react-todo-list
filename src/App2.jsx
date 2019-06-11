import React, {createContext, Component} from 'react';

const BatteryContext = createContext();

class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    return (
      <h1>Battery: {battery}</h1>
    );
  }
}
// 为了体现层级多的关系，增加一层 Middle 组件
class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class App extends Component {
  state = {
    battery: 60
  }
  render () {
    const {battery, online} = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <button type="button" 
          onClick={() => {this.setState({battery: battery - 1})}}>
          Press
        </button>
        <Middle />
      </BatteryContext.Provider>
    )
  }

}

export default App;
