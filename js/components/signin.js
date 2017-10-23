import React from 'react';
import styles from '../main.css'

import Validation from '../user-validation-main';

export default class SigninBtn extends React.Component {

    render() {
        return (
            <button className={styles.signin} type="button" onClick={() => {this.props.signin(Validation.views.VIEW1, false, null)}}>Sign in</button>
        )
    }
} 