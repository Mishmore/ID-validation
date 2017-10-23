import React from 'react';
import styles from '../main.css'

import Validation from '../user-validation-main';
import LogoutBtn  from './logout';
import SigninBtn  from './signin';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav>
                <div className={styles.logoContainer}>
                    <div className={styles.logo}></div>
                    { this.props.currentView == 0 && <SigninBtn signin={(view, newState, newDni) => this.props.onChangeView(view, newState, newDni)} /> }
                    <LogoutBtn logout={(view, newState, newDni) => this.props.onChangeView(view, newState, newDni)} />
                </div>      
            </nav>
        )
    } 

}