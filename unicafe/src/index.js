import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) =>{
  return (
    <button onClick = {onClick}>{text}</button>
  );
}

const Statistic = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good, neutral, bad}) =>{

    const average = () =>{
      const total = good + neutral + bad;
      return (good + (-bad)) / total;
    }

    const positive = () =>{
      const total = good + neutral + bad;
      return (good / total) * 100;
    }
    if(good === 0 && neutral === 0 && bad === 0){
      return(
        <p>No feedback given</p>
      );
    }
    return(
      <table>
        <tbody>
          <Statistic text = "good" value = {good}/>
          <Statistic text = "neutral" value = {neutral}/>
          <Statistic text = "bad" value = {bad}/>
          <Statistic text = "all" value = {good + neutral + bad}/>
          <Statistic text = "average" value = {average()}/>
          <Statistic text = "positive" value = {positive() + ' %'}/>
        </tbody>
      </table>
    );
}

const App = () =>{
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () =>{
    setGood(good + 1);
  }

  const handleNeutral = ()=>{
    setNeutral(neutral + 1);
  }

  const handleBad = ()=>{
    setBad(bad + 1);
  }

  return(
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick = {handleGood} text = "good"/>
        <Button onClick = {handleNeutral} text = "neutral"/>
        <Button onClick = {handleBad} text = "bad"/>
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral = {neutral} bad={bad}/>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
