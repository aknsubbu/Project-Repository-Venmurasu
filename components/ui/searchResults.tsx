import React, { useState } from 'react';
import Modal, { Styles } from 'react-modal';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface Book {
  cover_i: number;
  has_fulltext: boolean;
  edition_count: number;
  title: string;
  author_name: string[];
  first_publish_year: number;
  key: string;
  ia: string[];
  author_key: string[];
  public_scan_b: boolean;
}

interface Props {
  searchResults: Book[];
}

const SearchResultsModal: React.FC<Props> = ({ searchResults }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles: Styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxHeight: '80vh',
      overflowY: 'auto' as const,
    },
  };


  return (
    // <>
    //   <div className="mt-4 flex items-center justify-center">
    //     <button onClick={handleOpenModal}>View All Results</button>
    //   </div>
    //   <Modal
    //     isOpen={modalIsOpen}
    //     onRequestClose={handleCloseModal}
    //     style={customStyles}
    //     contentLabel="Search Results Modal"
    //     className=" bg-white rounded-xl p-5"
    //   >
    //     <h2 className="text-lg font-semibold">Search Results:</h2>
    //     <ul>
    //       {searchResults.map((result, index) => (
    //         <li key={index}>
    //           <Separator />
    //           <p>{result.title}</p>
    //           <p>{result.first_publish_year}</p>
    //           <Separator />
    //         </li>
    //       ))}
    //     </ul>
    //     <button onClick={handleCloseModal}>Close Modal</button>
    //   </Modal>
    // </>
    <div className=" max-w-full overflow-x-auto shadow-md sm:rounded-lg max-h-[500px]">
  <Table>
    <TableCaption>A list of your search results.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[300px]">Title</TableHead>
        <TableHead>First Publish Year</TableHead>
        <TableHead>Author Name</TableHead>
        <TableHead>Edition Count</TableHead>
        <TableHead>Has Full Text</TableHead>
        
      </TableRow>
    </TableHeader>
    <TableBody>
      {searchResults.map((result, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{result.title}</TableCell>
          <TableCell>{result.first_publish_year}</TableCell>
          <TableCell>{result.author_name}</TableCell>
          <TableCell>{result.edition_count}</TableCell>
          <TableCell>{result.has_fulltext.toString()}</TableCell>
          
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>

  );
};

export default SearchResultsModal;