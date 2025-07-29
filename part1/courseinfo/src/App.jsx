const App = () =>{
  const course = {name: 'Half Stack application development',
  parts:[{name: 'fundamental of react',
    exercises: 10
  },
  
   {
    name: 'using props to pass data',
    exercises:7
  },
  
    {
    name: 'State of a component',
    exercises: 14
  }]
  }
return (
    <div>
      <Header heading={course}/>
      <Content content = {course}/>
      <Total total= {course}/>
    </div>
  )
}

const Header = (props) => {
return (<div>
<h1>{props.heading.name}</h1> 
</div>)
}
const Content = (props) => {
  return(
    <div>
      <Part part={props.content.parts[0].name} exercise={props.content.parts[0].exercises}/>
      <Part part={props.content.parts[1].name} exercise={props.content.parts[1].exercises}/>
      <Part part={props.content.parts[2].name} exercise={props.content.parts[2].exercises}/>
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
    <p>Number of excercises {props.total.parts[0].exercises + props.total.parts[1].exercises + props.total.parts[2].exercises}</p>
  </div>
}

export default App