import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  Button,
  Form,
  ListGroup,
  Modal,
} from 'react-bootstrap'

class Panda extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalOpen: false,
      editForm:{
        enjoys: props.panda.enjoys
      }
    }
  }

  showModal = ()=>{
    this.setState({modalOpen: true})
  }

  hideModal = ()=>{
    this.setState({modalOpen: false})
  }

  handlePandaEdit = (e)=>{
    const { editForm } = this.state
    editForm[e.target.name] = e.target.value
    this.setState({ editForm })
  }

  onUpdateSubmit = ()=>{
    const{ editForm } = this.state
    const{ panda } = this.props
    this.props.onUpdate(panda.id, editForm)
  }

  render() {
    const { panda, index } = this.props
    const { editForm } = this.state

    return(
      <ListGroup.Item key={index}>
        <label>
          {panda.name}
        </label>
        <div>
          age: {panda.age} - Enjoys: {panda.enjoys}
        </div>
        <div>
          <Button
            pandaindex={index}
            onClick={this.showModal}
          >
            About
          </Button>
        </div>
        <Modal
          show={this.state.modalOpen}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{panda.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <label>Name</label>
            <p>{panda.name}
            </p>
            <label>Age</label>
            <p>{panda.age}
            </p>
            <Form.Group>
              <Form.Label>Enjoys</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enjoys"
                name="enjoys"
                pandaindex={index}
                onChange={this.handlePandaEdit}
                value={editForm.enjoys}
              />
              <Form.Text className="text">
                What does your panda like to do?
              </Form.Text>
            </Form.Group>
            <Button
              pandaid = {panda.id}
              onClick={this.onUpdateSubmit}
            >Update</Button>
          </Modal.Body>

          <Modal.Footer>
          </Modal.Footer>
        </Modal>

      </ListGroup.Item>
    )
  }
}

export default Panda
