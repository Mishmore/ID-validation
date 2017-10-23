import React from 'react';
import styles from '../main.css'

import Navbar  from './navbar';

export default class Init extends React.Component {

    render() {
        return (
            <div className={styles.init}>
                <Navbar onChangeView={(view, newState, newDni) => this.props.onChangeView(view, newState, newDni)} currentView={this.props.currentView}/>
                <div className={styles.container}>
                    <h1>Welcome!</h1>               
                </div>
            </div>
        )
    } 

}
