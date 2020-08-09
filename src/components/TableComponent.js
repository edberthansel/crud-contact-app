import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import swal from 'sweetalert';
// import { deleteContactById } from "../actions/apiCallAction";

// // Delete function di-disabled karena API Delete tidak berfungsi dengan baik
// const deleteOnClick = (dispatch, id) => {
//   swal({
//     title: "Delete this contact ?",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       dispatch(deleteContactById(id))
//       swal("Contact successfully deleted!", {
//         icon: "success",
//       });
//     } else {
//       swal("Failed to delete contact!");
//     }
//   });
// }

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getAllContactList: state.contacts.getAllContactList,
    errorAllContactList: state.contacts.errorAllContactList,
  };
};

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: { color: 'white'}
    },
    {
      dataField: "firstName",
      text: "First Name",
      sort: true,
      headerStyle: { color: 'white'}
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
      headerStyle: { color: 'white'}
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      headerStyle: { color: 'white'}
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: { color: 'white'},
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="light" className="mr-2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"edit/" + row.id}>
              <Button color="light" className="mr-2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            {/* Delete button di-disabled karena API Delete tidak berfungsi dengan baik */}
            {/* <Button color="dark" className="mr-2" onClick={() => deleteOnClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button> */}
          </div>
        );
      },
    },
  ];

  
  return (
    <Container>
      {props.getAllContactList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getAllContactList}
          columns={columns}
          defaultSorted={defaultSorted}
        >
          {(props) => (
            <div>
              <br/>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="light" className="mr-2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create New Contact
                    </Button>
                  </Link>
                </Col>
              </Row>
              <br/>
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
                rowStyle={ { color: 'white' } }
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorAllContactList ? (
            <h4>{props.errorAllContactList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);