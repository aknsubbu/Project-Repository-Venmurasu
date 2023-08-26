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
        {fetchedData.bib_key && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Authors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{fetchedData.details.title}</td>

                <td>
                  {fetchedData.details.authors.map((authors) => authors.name)}
                </td>
              </tr>
            </tbody>
          </Table>
        )}
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
