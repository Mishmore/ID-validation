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
    }

    onCloseClick(newClick) {
        this.setState({ isClicked: newClick })
    }

    render() {
        return(
            <div>
                <li className={styles.ride} onClick={this.props.openMap}>
                    <p>Origin: {this.props.origin}</p>
                    <p>Destination: {this.props.destination}</p>
                    <p>Total: {this.props.total}</p>
                    <a href="#" onClick={this.openMap.bind(this)}>Open map</a>
                </li>
                    { this.state.isClicked && <Map coords={this.state.data.rideinfo} parentState={(newClick) => this.onCloseClick(newClick)} initialClick={this.state.isClicked}/> }
            </div>
        )
    }

} 