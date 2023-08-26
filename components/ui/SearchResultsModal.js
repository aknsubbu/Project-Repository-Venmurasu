import React from "react";
import { Modal, Table } from "react-bootstrap";
import { Button } from "@/components/ui/button";

const SearchResultsModal = ({ showModal, handleCloseModal, fetchedData }) => {
  console.log(fetchedData);
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Search Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
              <th>Description</th>
            </tr>
          </thead>
          {/* <tbody>
            {fetchedData.map((book) => (
              <tr key={book.key}>
                <td>{book.title}</td>
                <td>
                  {book.authors.map((author, index) => (
                    <span key={index}>{author.name}</span>
                  ))}
                </td>
                <td>{book.description}</td>
              </tr>
            ))}
          </tbody> */}
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchResultsModal;
