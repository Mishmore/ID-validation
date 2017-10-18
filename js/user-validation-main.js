import React from 'react';
import styles from './main.css'

import Profile from './components/profile';
import Form from './components/form';

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
        this.changeView = this.changeView.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            dniOwner: null,
            registered: false,
            currentView: Validation.views.VIEW1 //Assign currentView for the future updates
       }
    }

    //Callback to change the current view
    changeView (view) {
        this.setState({ currentView: view });
    }

    //Will be used on the callback Parent defined in the component
    onRegister(newState, newDni) {
        this.setState({ registered: newState, dniOwner: newDni })
    }

    mainCallback(view, newState, newDni) {
        this.setState({ currentView: view });
        this.setState({ registered: newState, dniOwner: newDni })
        // this.changeView(view);
        // this.onRegister(newState, newDni);
    }

    render() {

        let view = null;

        switch (this.state.currentView) {

            case Validation.views.VIEW1:
                view = <Form onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)} /> //Assigning the cb as a property for the use of components
                break;

            case Validation.views.VIEW2:
                view = <Profile name={this.state.dniOwner.nombres} onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)} />
                break;

            default:
                view = <Form onChangeView={(view, newState, newDni) => this.mainCallback(view, newState, newDni)}/>    
                break;

        }

        return (
            view
        );        
    }
    
}