import React, { Component } from 'react';
import {
  Button,
  Form,
  Jumbotron,
  ListGroup,
} from 'react-bootstrap'

import Panda from './Panda'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pandas: [],
      form: {
        name: '',
        age: 0,
        enjoys: '',
      },
    }
  }

  componentDidMount(){
    this.allPandas()
  }

  allPandas = ()=>{
    fetch('http://localhost:3000/pandas')
    .then((response)=>{
      if(response.status === "200"){
        throw "Unable to load Pandas, please retry"
      }else{
        return response.json()
      }
    })
    .then((pandas)=>{
      this.setState({
        pandas
      })
    })
    .catch(error => {
      alert(error)
    })
  }

  handlePandaCreate = (e)=>{
    e.preventDefault()
    fetch("http://localhost:3000/pandas",{
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(this.state.form)
    })
    .then((response)=>{
      if(response.status === 200){
        return response.json()
      }else{
        throw "Unable to create, please try again."
      }
    })
    .then((newPanda)=>{
      const{ pandas } = this.state
      pandas.push(newPanda)
      this.setState({ pandas })
    })
    .catch(e => alert(e))
  }

  handlePandaUpdate = (id, panda)=>{
    fetch(`http://localhost:3000/pandas/${id}`,{
      method: 'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(panda)
    })
    .then((response)=>{
      if(response.status === 200){
        return response.json()
      }else{
        throw "Unable to edit, please try again."
      }
    })
    .then((updatedPanda)=>{
      this.allPandas()
    })
    .catch(e => alert(e))
  }

  handleChange = (e)=>{
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form })
    console.log(this.state)
  }

  render() {
    const { form, editForm } = this.state
    return (
      <div>
        <Jumbotron>
          <h1>Panda wants to be your friend.</h1>
        </Jumbotron>
        <Form
          onSubmit={this.handlePandaCreate}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.handleChange}
              value={form.name}
            />
            <Form.Text className="text">
              What is the name of your Panda?
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
              value={form.age}
            />
            <Form.Text className="number">
              How old is your Panda?
            </Form.Text>
          </Form.Group>


          <Form.Group>
            <Form.Label>Enjoys</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enjoys"
              name="enjoys"
              onChange={this.handleChange}
              value={form.enjoys}
            />
            <Form.Text className="text">
              What does your panda like to do?
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        <ListGroup>
          {this.state.pandas.map((panda, index)=>{
            return(
              <Panda
                panda={panda}
                index={index}
                key={index}
                onUpdate={this.handlePandaUpdate}
              />
            )
          })}
        </ListGroup>
      </div>
    )
  }
}

export default App;
