import React, { Component } from 'react';
import BookCard from './BookCard';


const BookList = (props) => {
    return (
      <div className="list">
        {
          props.books.map((book) => {
            return <BookCard key={book.id} info={book} onSave={props.onSave} />
          })
        }
      </div>
      
    );
}

export default BookList;
