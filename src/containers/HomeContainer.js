import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getAllContactList, deleteDataContact } from '../actions/apiCallAction';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getAllContactList());
    this.props.dispatch(deleteDataContact());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
