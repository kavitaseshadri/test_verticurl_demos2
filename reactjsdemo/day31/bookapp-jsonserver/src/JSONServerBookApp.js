import React, { useState } from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const JSONServerBookApp = () => {
    return (
        <div className="app">
            {/* <OtherContext>
                <Advertisement />
            </OtherContext> */}
            {/* <Provider> */}
            <BookList />
            <BookCreate />
            {/* </Provider> */}

        </div>
    );
}

export default JSONServerBookApp