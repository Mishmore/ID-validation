import React from 'react';
import styles from './main.css'

import Profile from './components/profile';
import Form from './components/form';

export default class Validation extends React.Component {

    constructor() {
        super();

        this.state = {
            dniOwner: null,
            registered: false
       }
    }

    //Will be used on the callback Parent defined in the component
    onRegister(newState, newDni) {
        this.setState({ registered: newState, dniOwner: newDni })
    }

    render() {
       
        return ( 
            <div>
                { this.state.registered ? 
                    <Profile name={this.state.dniOwner.nombres} callbackParent={(newState, newDni) => this.onRegister(newState, newDni)}/>
                    : <Form initialStatus={this.state.registered} callbackParent={(newState, newDni) => this.onRegister(newState, newDni)}/>
                }
            </div>
        );
        
    }
    
}
