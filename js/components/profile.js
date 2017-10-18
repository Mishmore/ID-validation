import React from 'react';
import styles from '../main.css';
import { getJSON } from '../utils/get-json';
import RideList from './rideList';
import Validation from '../user-validation-main';

export default class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            dniOwner: null,
            registered: false,
            rides: null
       }
    }

    updateState() {
        const newState = false;
        const newDni = null
        this.setState({ registered: newState, dniOwner: newDni }); // changing the local state
        this.props.callbackParent(newState, newDni); // callback to send the state to parent
    }

    render() {

        return (
            <div>
                <nav>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}></div>
                     </div>      
                </nav>
                <div className={`${styles.container} ${styles.profile}`}>
                    <h4>Welcome on board <span className={styles.name}>{this.props.name}!</span></h4> 
                    <RideList />
                    <button type="button" onClick={() => {this.updateState.bind(this); this.props.onChangeView(Validation.views.VIEW1, this.state.registered, this.state.dniOwner)}}>Log out</button>
                </div>
            </div>
        )
        
    }

} 