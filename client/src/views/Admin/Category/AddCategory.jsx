import React from 'react';
import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
import {
     Button,
    Form, FormGroup, Label, Input,
    Modal, ModalHeader, ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../../actions';



class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
        }
        //binding
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //On handle login function
    async handleSubmit(e) {
        e.preventDefault();
        let obj = {
            "name": this.state.name,
            "description": this.state.description,
        }
        try {
            let response = await fetch('http://localhost:8080/api/category', {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            await response.json();
            this.props.fetchCategory();
            this.props.close();

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.close}>
                <ModalHeader>Category Detail</ModalHeader>
                <ModalBody>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input style={{border: 'none', borderBottom: "1px solid #E3E3E3", borderRadius: 0}} placeholder="Enter category title" onChange={(e) => { this.setState({ name: e.target.value }) }} required />
                        </FormGroup>

                        <FormGroup>
                            <Label>Description</Label>
                            <Input type="textarea" onChange={(e) => { this.setState({ description: e.target.value }) }} placeholder="Description goes here .." required />
                        </FormGroup>

                        <FormGroup>
                            <Button outline type="submit">Submit</Button>{' '}
                            <Button outline onClick={this.props.close}>Close</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}
//export default Forms;
function matchDatesToProps(state) {
    return {
        category: state.category
    }
}
export default connect(matchDatesToProps, actions)(Forms);