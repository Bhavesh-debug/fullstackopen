const App = () =>{
  const course = 'Half Stack application development'
  const parts =[
   {name: 'fundamental of react',
    exercises: 10
  },
  
   {
    name: 'using props to pass data',
    exercises:7
  },
  
    {
    name: 'State of a component',
    exercises: 14
  }
]
return (
    <div>
      <Header heading={course}/>
      <Content parts = {parts}/>
      <Total total= {parts}/>
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
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
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
    <p>Number of excercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
  </div>
}

export default App