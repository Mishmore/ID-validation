import React from 'react';
import styles from '../main.css';
import { getJSON } from '../utils/get-json';

import RideList from './rideList';
import Validation from '../user-validation-main';
import Navbar  from './navbar';

export default class Profile extends React.Component {

    constructor() {
        super();

        this.state = {
            rides: null
       }
    }

    render() {

        return (
            <div>
                <Navbar onChangeView={(view, newState, newDni) => this.props.onChangeView(view, newState, newDni)} currentView={this.props.currentView}/>                
                <div className={`${styles.container} ${styles.profile}`}>
                    <h4>Welcome on board <span className={styles.name}>{this.props.name}!</span></h4> 
                    <RideList />
                </div>
            </div>
        )
        
    }

} 