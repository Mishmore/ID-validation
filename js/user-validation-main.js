import React from 'react';
import { getJSON } from './utils/get-json';
//import styles from './main.css'

export default class Validation extends React.Component {

    constructor() {
        super();

        this.login = this.login.bind(this);
        this.state = { 
          dniOwner: null
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
                this.login(result.apellido_paterno, result.apellido_materno, `${result.apellido_paterno}@gmail.com`);
                console.table(result);
            }
        });
    }

    login(userId, username, email) {
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
                <input type="number" placeholder="Ingresa el DNI" id="dni" />
                <button onClick={this.validateDNI.bind(this)}>CONSULTAR</button>
            </div>
        );
        
    }

}
