import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getContactDetailById: state.contacts.getContactDetailById,
    errorContactDetailById: state.contacts.errorContactDetailById,
  };
};

const DetailContactComponent = (props) => {
  return (
    <Table striped style={{color: 'white'}}>
      <tbody>
        <tr>
          <td width="200">ID</td>
          <td width="10">:</td>
          <td>{props.getContactDetailById.id}</td>
        </tr>
        <tr>
          <td width="200">First Name</td>
          <td width="10">:</td>
          <td>{props.getContactDetailById.firstName}</td>
        </tr>
        <tr>
          <td width="200">Last Name</td>
          <td width="10">:</td>
          <td>{props.getContactDetailById.lastName}</td>
        </tr>
        <tr>
          <td width="200">Age</td>
          <td width="10">:</td>
          <td>{props.getContactDetailById.age}</td>
        </tr>
        <tr>
          <td width="200">Photo</td>
          <td width="10">:</td>
          <td>{props.getContactDetailById.photo}</td>
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailContactComponent);
