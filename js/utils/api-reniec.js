import TecactusApi from 'reniec-sunat-js';

const reniecValidation = (token) => {
    let tecactusApi = new TecactusApi(token);
    
    return tecactusApi.Reniec.getDni("41235678")
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

}

