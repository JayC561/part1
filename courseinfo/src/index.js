import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.parts.parts[0].part} exercises = {props.parts.parts[0].exercises}/>
      <Part part={props.parts.parts[1].part} exercises = {props.parts.parts[1].exercises}/>
      <Part part={props.parts.parts[2].part} exercises = {props.parts.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.exercises.parts[0].exercises + props.exercises.parts[1].exercises + props.exercises.parts[2].exercises}</p>
  )
}

const Part = (props) =>{
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const App = () =>{
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part:'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <>
      <Header course = {course}/>
      <Content parts = {course}/>
      <Total exercises = {course}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
