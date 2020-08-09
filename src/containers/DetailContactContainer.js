import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getContactDetailById } from "../actions/apiCallAction";
import DetailContactComponent from "../components/DetailContactComponent";

class DetailContactContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getContactDetailById(this.props.match.params.id));
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h1>Contact Detail</h1>
        <DetailContactComponent />
      </Container>
    );
  }
}

export default connect()(DetailContactContainer);
