import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) =>{
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([
    0,0,0,0,0,0
  ]);

  const[isClicked, setIsClicked] = useState(false);

  const genRandom = (max, min) =>{
    const index = Math.floor(Math.random() * (max - min));
    setSelected(index);
  }

  const increment = () =>{
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    setIsClicked(true);
  }

  const maxVotes = () =>{
    if(isClicked){
      let max = 0;
      points.map((val, index) =>{
        if(max < val){
          max = val;
        }
      });
      return points.indexOf(max);
    }
    return;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has votes {points[selected]}</p>
      <div>
        <Button onClick = {increment} text = "vote"/>
        <Button onClick = {() => genRandom(props.anecdotes.length, 0)} text = "next anecdote"/>
      </div>
      <h1>Anecdote with most votes</h1>
      <AnecdoteWithMostPoints points = {points} maxVotes = {maxVotes} anecdotes = {anecdotes}/>
    </div>
  );
}

const Button = ({onClick, text})  =>{
  return(
    <button onClick = {onClick}>{text}</button>
  );
}

const AnecdoteWithMostPoints = (props) =>{
  const index = props.maxVotes();
  if(index !== undefined){
    console.log(index);
    return(
      <div>
        <p>{anecdotes[index]}</p>
        <p>has votes {props.points[index]}</p>
      </div>
    );
  }
  return <p>No votes has been given</p>
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes = {anecdotes}/>,
  document.getElementById('root')
);
