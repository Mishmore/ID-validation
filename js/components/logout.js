import React from 'react';
import styles from '../main.css'

import Validation from '../user-validation-main';

export default class LogoutBtn extends React.Component {

    render() {
        return (
            <button className={styles.logout} type="button" onClick={() => {this.props.logout(Validation.views.INITIAL_VIEW, false, null)}}>Log out</button>
        )
    }
} 