import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

import Map from './map';

export default class Ride extends React.Component {

    constructor(rideinfo) {
        super();

        this.state = { 
            data: rideinfo,
            isClicked: false
         }
    }

    openMap() {        
        this.setState({ isClicked: true });
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'; 
    }

    onCloseClick(newClick, e) {
        this.setState({ isClicked: newClick });
        document.getElementsByTagName('body')[0].style.overflow = 'auto';    
    }

    render() {
        return(
            <div>
                <li className={styles.ride} onClick={this.openMap.bind(this)}>
                    <p>
                        <span className={styles.bold}>Origin: </span><span>{this.props.origin}</span>
                        </p>
                    <p>
                        <span className={styles.bold}>Destination: </span><span>{this.props.destination}</span>
                        </p>
                    <p>
                        <span className={styles.bold}>Total: </span><span>{this.props.total}</span>
                        </p>
                </li>
                    { this.state.isClicked && <Map coords={this.state.data.rideinfo} parentState={(newClick, e) => this.onCloseClick(newClick, e)} initialClick={this.state.isClicked}/> }
            </div>
        )
    }

} 