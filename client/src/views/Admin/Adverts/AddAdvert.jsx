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
        };
        //binding
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
//Fetching redux data
    onHandleChange(e) {
        this.setState({ body: e });
        console.log(this.state.body);
    }
componentDidMount() {
    }
    async handleSubmit(e) {
        e.preventDefault();
        let formdata = new FormData();
        
        formdata.append("title", this.state.title);
        formdata.append("url", this.state.url);
        formdata.append("picture", this.state.picture);

        try {
            let response = await fetch("/api/advert/", {
                method: "POST",
                credentials: "include",
                body: formdata
            });
            await response.json();
            this.props.fetchAdverts();
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
        Advert: state.Advert,
        category: state.category,
       adverts:state.articles

    }
}
export default connect(matchDatesToProps, actions)(Forms);