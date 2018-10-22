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
            title: "",
            url: "",
        }
        //binding
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //On handle login function
    async handleSubmit(e) {
        e.preventDefault();
        let obj = {
            "title": this.state.title,
            "url": this.state.url,
            "picture": this.state.picture,
        }
        try {
            let response = await fetch('http://localhost:8080/api/advert', {
                method: 'POST',
                credentials: "include",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            await response.json();
            this.props.fetchAdvert();
            this.props.close();

        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.close}>
                <ModalHeader>Advert Detail</ModalHeader>
                <ModalBody>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input style={{border: 'none', borderBottom: "1px solid #E3E3E3", borderRadius: 0}} placeholder="Enter advertisement title" onChange={(e) => { this.setState({ title: e.target.value }) }} required />
                        </FormGroup>

                        <FormGroup>
                            <Label>url</Label>
                            <Input type="textarea" onChange={(e) => { this.setState({ url: e.target.value }) }} placeholder="Enter advert URL " required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Media</Label>
                            <Input
                                type="file"
                                onChange={e => {
                                    this.setState({ picture: e.target.files[0] })
                                }}
                            />
                            <Button outline><i className="now-ui-icons cloud-arrow-upload-94"></i>Pick Media File</Button>
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
        Advert: state.Advert
    }
}
export default connect(matchDatesToProps, actions)(Forms);