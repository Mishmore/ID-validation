import React from 'react';
import { getJSON } from './utils/get-json';
import TecactusApi from 'reniec-sunat-js';
//import styles from './main.css'

export default class Validation extends React.Component {

    constructor() {
        super();
        this.validateDNI = this.validateDNI.bind(this);

        this.state = { 
          input: null
       }
    }
    
    componentDidMount() {
    }
    
    validateDNI() {
        let token = 'BQQAy3nslnuejowJaL7bvS6PB0qir1LoXyVZuURD';
        let tecatus = new TecactusApi(token);
        let dni = document.getElementById('dni').value.toString();

        this.setState({ input: dni }, () => {
            tecatus.Reniec.getDni(this.state.input)
                .then(function (response) {
                    console.log("consulta correcta!");
                    console.log(response.data);
                })
                .catch(function (response) {
                    console.log("algo ocurrió");
                    console.log("código de error: " + response.code);
                    console.log("mensaje de respuesta: " + response.status);
                    console.log(response.data);
                })
        })
 
    }

    render() {

        return ( 
                <div>
                    <input type="number" placeholder="Ingresa el DNI" id="dni" />
                    <button onClick={this.validateDNI}>CONSULTAR</button>
                </div>
        );
        
    }

}
