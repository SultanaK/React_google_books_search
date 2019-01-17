import React, { Component } from 'react';


const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const {title, authors, subtitle, publishedDate, onSave} = props.info.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;

    return (
      
      <div className="card-container">
        <img src={thumbNail} alt=""/>
        <div className="desc">
          <h2>{title}</h2>
          <h3>Author: {authors}</h3>
          <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
        </div>
        <button onClick={() => props.onSave({title: title})}> Save</button>
      </div>
      
      
    );
}

export default BookCard;
