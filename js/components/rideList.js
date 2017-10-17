import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';
import Ride from './ride';

export default class RideList extends React.Component {

    constructor() {
        super();

        this.state = {
            rides: null
       }
    }

    // componentWillMount() {
    //     console.log('asking json');

    //     getJSON('../data.json', (err, json) => {
    //         (err) ? alert(err.message) : this.setState({ rides: json.items });
    //         console.log(json.items);
    //     })
    // }

    render() {
        return(
            <ul>
                {/* {this.state.rides.map(elm => <Ride origin={elm.src_loc} destination={elm.dst_loc} total="S/ 50"/>)} */}
            </ul>
        )
    }

} 