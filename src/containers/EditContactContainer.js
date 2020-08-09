import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import {
  getContactDetailById,
  putUpdateContact,
} from "../actions/apiCallAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataContact: state.contacts.getResponseDataContact,
    errorResponseDataContact: state.contacts.errorResponseDataContact,
  };
};

class EditContactContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getContactDetailById(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUpdateContact(data, this.props.match.params.id));
  }

  render() {
    if (
      this.props.getResponseDataContact ||
      this.props.errorResponseDataContact
    ) {
      if (this.props.errorResponseDataContact) {
        swal("Failed!", this.props.errorResponseDataContact, "error");
      } else {
        swal("Contact successfully updated!", {
          icon: "success",
        });
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit Contact</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditContactContainer);
