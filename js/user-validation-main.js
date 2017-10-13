import React from 'react';
import { getJSON } from './utils/get-json';
//import styles from './main.css'

export default class Validation extends React.Component {

    constructor() {
        super();

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
                console.table(result);
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
