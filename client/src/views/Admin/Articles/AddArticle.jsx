import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import renderHTML from 'react-render-html';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Modal, ModalBody, ModalHeader
} from "reactstrap";

import { connect } from "react-redux";
import * as actions from "../../../actions";

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            category: false
        };
        //binding
        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Handling the input data
    onHandleChange(e) {
        this.setState({ body: e });
        console.log(this.state.body);
    }
    //Fetching redux data
    componentDidMount() {
    }
    //Request to the database
    async handleSubmit(e) {
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("category", this.state.select);
        formdata.append("title", this.state.title);
        formdata.append("body", this.state.body);
        formdata.append("picture", this.state.picture);

        try {
            let response = await fetch("/api/articles", {
                method: "POST",
                credentials: "include",
                body: formdata
            });
            await response.json();
            this.props.fetchArticles();
            this.props.close();
        } catch (error) {
            console.log(error);
        }


    }

    render() {
        return (
            <Modal isOpen={this.props.open} toggle={this.props.close}>
                <ModalHeader>New Article</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>
                                Select Category
                            </Label>
                            <Input
                                type="select"
                                onChange={e => {
                                    this.setState({ select: e.target.value });
                                }}
                                name="select"
                                id="select"
                            >
                                <option>--select category--</option>
                                {
                                    this.props.category.map((data, index) => (
                                        <option key={index} value={data._id}>
                                            {data.name}
                                        </option>
                                    ))
                                }
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                Title
                            </Label>
                            <Input
                                value={this.state.title}
                                type="text"
                                name="title"
                                onChange={e => {
                                    this.setState({ title: e.target.value });
                                }}
                                placeholder="Summary of the article ..."
                                required
                            />
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
                            <Label>
                                Article Content
                            </Label>
                            <ReactQuill
                                theme="snow"
                                modules={Forms.modules}
                                formats={Forms.formats}
                                value={this.state.body}
                                placeholder="article body goes here .. "
                                onChange={this.onHandleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button outline type="submit">
                                Submit
                                </Button>
                            <Button outline>
                                Close
                                </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}
//Defining modules for quill
Forms.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"]
    ]
};

Forms.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
    "code-block"
];
//export default Forms;
function matchDatesToProps(state) {
    return {
        category: state.category
    };
}
export default connect(
    matchDatesToProps,
    actions
)(Forms);
