import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

import Validation from '../user-validation-main';
import Navbar  from './navbar';

export default class Form extends React.Component {

    constructor(initialStatus) {
        super();

        this.login = this.login.bind(this);

        this.state = { 
          dniOwner: null,
          registered: initialStatus // initialStatus as a parameter to pass to parent
       }
    }
    
    validateDNI() {
        const dni = document.getElementById('dni').value.toString();
        const endpoint = `http://localhost:13431/dni/?v=${dni}`;

        getJSON(endpoint, (trouble, result) => {
            if (trouble) {
                console.error(trouble);
            } else {
                this.setState({ "dniOwner": result  }, () => { // Set status is async!

                    console.table(this.state.dniOwner);
                    this.login(this.state.dniOwner.apellido_paterno);

                    this.props.onChangeView(Validation.views.VIEW2, true, this.state.dniOwner); //main Callback

                });

                
            }
        });
    }

    login(userId) {
        const email = document.getElementById('email').value.toString();
        const username = document.getElementById('username').value.toString();
        const password = document.getElementById('password').value.toString();
        
        const endpoint = `http://localhost:13431/api/new-user/?userid=${userId}&username=${username}&email=${email}`

        getJSON(endpoint, (trouble, result) => {
           if (trouble) {
               console.log(trouble);
           }
        });
    }

    render() {

        return ( 
            <div>
                <Navbar onChangeView={(view, newState, newDni) => this.props.onChangeView(view, newState, newDni)}/>                
                <div className={styles.container}>
                    <form className={styles.form}>
                        <fieldset>
                            <label>DNI: </label>
                            <input type="number" id="dni" />
                        </fieldset>
                        <fieldset>
                            <label>Username: </label>
                            <input type="text" id="username" />
                        </fieldset> 
                        <fieldset>
                            <label>Email: </label>
                            <input type="text" id="email" />
                        </fieldset>
                        <fieldset>
                            <label>Password: </label>
                            <input type="password" id="password" />
                        </fieldset>   
                        <button type="button" onClick={this.validateDNI.bind(this)} className={styles.signin}>Sign in</button>
                    </form>
                </div>
            </div>
        );
        
    }

}