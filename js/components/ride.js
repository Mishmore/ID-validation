import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

export default class Ride extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <li className={styles.ride}>
                <p>Origin: {this.props.origin}</p>
                <p>Destination: {this.props.destination}</p>
                <p>Total: {this.props.total}</p>
            </li>
        )
    }

} 