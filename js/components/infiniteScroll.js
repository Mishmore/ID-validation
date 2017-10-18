import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

export default class InfiniteScroll extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }

    render() {
        return ( this.props.children )
    }

}