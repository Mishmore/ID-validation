import React from 'react';
import ReactDOM from 'react-dom';

import Validation from './user-validation-main';

class Tracker extends React.Component {
    
        constructor() {
            super();
        }
    
        render() {
            
            return (
                <Validation />
            );
        }
    }
    
ReactDOM.render(

    <Tracker />,
    document.querySelector('main')

);