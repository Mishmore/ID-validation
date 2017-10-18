import React from 'react';
import styles from '../main.css';
import { getJSON } from '../utils/get-json';
import RideList from './rideList';
import Validation from '../user-validation-main';

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
                <nav>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}></div>
                     </div>      
                </nav>
                <div className={`${styles.container} ${styles.profile}`}>
                    <h4>Welcome on board <span className={styles.name}>{this.props.name}!</span></h4> 
                    <RideList />
                    <button type="button" onClick={() => {this.props.onChangeView(Validation.views.VIEW1, false, null)}}>Log out</button>
                </div>
            </div>
        )
        
    }

} 