import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postCreateContact } from "../actions/apiCallAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponseDataContact: state.contacts.getResponseDataContact,
    errorResponseDataContact: state.contacts.errorResponseDataContact,
  };
};

class CreateContactContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postCreateContact(data));
  }

  render() {
    if (
      this.props.getResponseDataContact ||
      this.props.errorResponseDataContact
    ) {
      if (this.props.errorResponseDataContact) {
        swal("Failed!", this.props.errorResponseDataContact, "error");
      } else {
        swal("New contact successfully created!", {
          icon: "success",
        });
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create New Contact</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateContactContainer);
