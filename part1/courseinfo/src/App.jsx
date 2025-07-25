const App = () =>{
  const course = 'Half Stack application development'
  const part1 ={
    name: 'fundamental of react',
    exercises: 10
  }
  
  const part2 = {
    name: 'using props to pass data',
    exercises:7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

return (
    <div>
      <Header heading={course}/>
      <Content 
      part1 = {part1.name} exercises1 = {part1.exercises}
      part2 = {part2.name} exercises2 = {part2.exercises}
      part3 = {part3.name} exercises3 = {part3.exercises}
      />

      <Total total= {part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
return (<div>
<h1>{props.heading}</h1>  
</div>)
}
const Content = (props) => {
  return(
    <div>
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
    </div>
  )
  
}
const Part = (props)=>{
  return(
    <p>
      {props.part} {props.exercise} 
    </p>
  )
}
const Total = (props) => {
  return <div>
    <p>Number of excercises {props.total}</p>
  </div>
}

export default App