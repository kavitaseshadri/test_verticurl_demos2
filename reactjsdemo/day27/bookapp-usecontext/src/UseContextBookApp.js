import React, { useState } from 'react'
import BookCreate from './bookapp-usecontext/components/BookCreate';
import BookList from './bookapp-usecontext/components/BookList';

const UseContextBookApp = () => {
    return (
        <div className="app">
            <BookList />
            <BookCreate />
        </div>
    );
}

export default UseContextBookApp