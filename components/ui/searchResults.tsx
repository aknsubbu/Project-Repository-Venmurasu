// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// interface Book {
//   cover_i: number;
//   has_fulltext: boolean;
//   edition_count: number;
//   title: string;
//   author_name: string[];
//   first_publish_year: number;
//   key: string;
//   ia: string[];
//   author_key: string[];
//   public_scan_b: boolean;
// }

// interface Props {
//   searchResults: Book[];
// }

// const SearchResultsModal: React.FC<Props> = ({ searchResults }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };

//   const handleOpenModal = () => {
//     setModalIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <>
//       <div className="mt-4">
//         <ul>
//           {searchResults.map((result, index) => (
//             <li key={index}>{result.title}</li>
//           ))}
//         </ul>
//         <button
//           className="border-4 border-black rounded-xl p-2"
//           onClick={handleOpenModal}
//         >
//           View All Results
//         </button>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={handleCloseModal}
//         style={customStyles}
//         contentLabel="Search Results Modal"
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle>Search Results</CardTitle>
//             <CardDescription>
//               This is the search result for the specified criteria
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             {searchResults.map((result, index) => (
//   <div key={index}>
//     <p>{result.title}</p>
//     <p>{result.author_name ? result.author_name.join(',') : 'N/A'}</p>
//     <p>{result.first_publish_year}</p>
//   </div>
// ))}
// {searchResults.map((result, index) => (

//           </CardContent>
          
//         </Card>

//         <button onClick={handleCloseModal}>Close Modal</button>
//       </Modal>
//     </>
//   );
// };

// export default SearchResultsModal;
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Separator } from "@/components/ui/separator"


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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="mt-4 flex items-center justify-center">
        <button onClick={handleOpenModal}>View All Results</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Search Results Modal"
        className="h-96 w-96 bg-white rounded-xl p-5"
      >
        <h2 className="text-lg font-semibold">Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
            <Separator />
              <p>{result.title}</p>
              <p>{result.first_publish_year}</p>
            <Separator />
            </li>
          ))}
        </ul>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </>
  );
};

export default SearchResultsModal;