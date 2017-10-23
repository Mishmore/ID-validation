import React from 'react';
import styles from './main.css'

import Profile from './components/profile';
import Form from './components/form';
import Init from './components/init'

export default class Validation extends React.Component {

    //Object that stores views
    static views = {
        INITIAL_VIEW: 0,
        VIEW1: 1,
        VIEW2: 2,
        VIEW3: 3
    };

    constructor() {
        super();

        this.state = {
            dniOwner: null,
            registered: false,
            currentView: Validation.views.INITIAL_VIEW //Assign currentView for the future updates
       }
    }

    mainCallback(view, newState, newDni) {
        this.setState({ currentView: view });
        this.setState({ registered: newState, dniOwner: newDni })
    }

    render() {

        let view = null;

        switch (this.state.currentView) {

            case Validation.views.VIEW1:
                view = <Form onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)} initialStatus={this.state.registered} currentView={this.state.currentView}/> // Assigning the cb as a property for the use of components
                break;

            case Validation.views.VIEW2:
                view = <Profile name={this.state.dniOwner.nombres} onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)} currentView={this.state.currentView}/>
                break;

            default:
                view = <Init onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)} currentView={this.state.currentView}/> // Initial status as a prop also!   
                break;

        }

        return (
            view
        );        
    }
    
}