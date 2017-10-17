import React from 'react';
import styles from '../main.css'

export default class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            dniOwner: null,
            registered: false
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
        <div className={`${styles.container} ${styles.profile}`}>
            <div className={styles.logo}></div>
            <h4>Welcome on board <span className={styles.name}>{this.props.name}!</span></h4> 
            <button type="button" onClick={this.updateState.bind(this)}>Log out</button>
        </div>
        )
        
    }

} 