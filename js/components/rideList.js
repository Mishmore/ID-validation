import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

import Ride from './ride';

export default class RideList extends React.Component {

    constructor() {
        super();

        this.state = {
            rides: null,
            rides2: null,
            loading: false,
       }
    }

    componentWillMount() {
        getJSON('../data.json', (err, json) => {
            (err) ? alert(err.message) : this.setState({ rides: json.items });
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.infiniteScroll());
        console.log('mounted');
    }
    
    componentWillUpdate() {
        this.state.loading ? 
        setTimeout(() => {
            getJSON('../data2.json', (err, json) => {
                (err) ? alert(err.message) : this.setState({ rides2: json.items });
                this.setState({ loading: false });
            }) 
        }, 500)
        : false ;    
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.infiniteScroll());      
    }

    infiniteScroll() {
        if (this.state.rides2 == null) {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
                this.setState({ loading: true });
            } else { return false }     
        }
    }

    render() {
        return(
            <ul className={styles.rideList}>
                { this.state.rides ?
                    this.state.rides.map(elm => 
                    <Ride origin={elm.src_loc.address.address} destination={elm.dst_loc.address.address} total={`S/ ${elm.receipt.total.amount}`} rideinfo={elm}/>) 
                    : <div className={styles.loading}></div>
                }
                { this.state.rides2 ?
                    this.state.rides2.map(elm => 
                    <Ride origin={elm.src_loc.address.address} destination={elm.dst_loc.address.address} total={`S/ ${elm.receipt.total.amount}`} rideinfo={elm}/>) 
                    : <div className={styles.loading}></div>
                }
            </ul>
        )
    }

}