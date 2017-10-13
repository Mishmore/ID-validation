import React from 'react';
import styles from '../main.css'

export default class Legend extends React.Component {

    render() {

        return (
        <div className={styles.legend}>
            <h4>Legend</h4>
            <div>
                <span className={styles.route}></span><span>Drives track</span>
            </div>
            <div>
                <span className={styles.origin}></span><span>Origin</span>
            </div>
            <div>
                <span className={styles.destination}></span><span>Destination</span>
            </div>
        </div>
        )
        
    }

} 