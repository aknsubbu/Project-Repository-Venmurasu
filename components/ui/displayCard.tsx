import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BookCardProps {
  book: {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
    publisher?: string[];
    publish_date?: string[];
    first_publish_year?: number;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          {book.cover_i && (
            <img
              src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
              className="w-24 h-32 object-cover rounded-lg"
            />
          )}
          <div>
            <div className="font-bold">Author(s):</div>
            <div>{book.author_name?.join(', ')}</div>
            <div className="font-bold">Publisher:</div>
            <div>{book.publisher?.join(', ')}</div>
            <div className="font-bold">Publish Date:</div>
            <div>{book.publish_date?.join(', ')}</div>
            <div className="font-bold">First Publish Year:</div>
            <div>{book.first_publish_year}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;