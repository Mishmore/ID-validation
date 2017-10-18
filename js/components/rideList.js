import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

import Ride from './ride';

export default class RideList extends React.Component {

    constructor() {
        super();

        this.state = {
            rides: null,
            item: null
       }
    }

    componentWillMount() {

        getJSON('../data.json', (err, json) => {
            (err) ? alert(err.message) : this.setState({ rides: json.items });
        })
    }

    render() {
        return(
            <ul>
                { this.state.rides ?
                    this.state.rides.map(elm => 
                    <Ride origin={elm.src_loc.address.address} destination={elm.dst_loc.address.address} total="S/ 50" />) 
                    : <li>"Cargando..."</li> }
            </ul>
        )
    }

} 