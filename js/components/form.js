import React from 'react';
import styles from '../main.css'
import { getJSON } from '../utils/get-json';

export default class Form extends React.Component {

    constructor(initialStatus) {
        super();

        this.login = this.login.bind(this);
        this.updateState = this.updateState.bind(this);
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
                this.setState({ "dniOwner": result  });
                this.login(this.state.dniOwner.apellido_paterno);
                console.table(this.state.dniOwner);

                this.updateState();
            }
        });
    }
    
    updateState() {
        const newState = true;
        const newDni = this.state.dniOwner;
        this.setState({ registered: newState, dniOwner: newDni }); // changing the local state
        this.props.callbackParent(newState, newDni); // callback to send the state to parent
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
                <nav>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}></div>
                    </div>
                </nav>
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
                        <button type="button" onClick={this.validateDNI.bind(this)}>Register</button>
                    </form>
                </div>
            </div>
        );
        
    }

} 