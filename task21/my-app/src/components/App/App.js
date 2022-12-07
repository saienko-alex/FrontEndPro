
import './App.css';
import react from 'react';


class App extends react.Component {

  state = {
    num1: 2,
    num2: 3,
    result: 0,
  }

  onCalculate = () => {
    this.setState({
      result: this.state.num1 + this.state.num2
    })
  }
  onNum1Change = (e) => {
    this.setState({
      num1: +e.target.value,
    })
  }
  onNum2Change = (e) => {
    this.setState({
      num2: +e.target.value,
    })
  }


    render () {
      return (
      <div>
        <input value={this.state.num1} onChange = {this.onNum1Change}></input>
        <input value={this.state.num2} onChange = {this.onNum2Change}></input>
        <button onClick={this.onCalculate}>Calculate</button>
        <br></br>
        {this.state.result}
      </div>)
    }
}


export default App;
