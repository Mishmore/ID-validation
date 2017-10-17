import React from 'react';
import styles from '../main.css'

export default class Profile extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
        <div className={styles.legend}>
            <h4>Welcome {this.props.name}</h4>
        </div>
        )
        
    }

} 