import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const UseContextBookApp = () => {
    return (
        <div className="app">
            <BookList />
            <BookCreate />
        </div>
    );
}

export default UseContextBookApp