const axios = require('axios');
const access_key = '85daa250a0ea3921a1eb4b4212ba68e4';
const currencies = 'COP';
const COP = 'COP';
const source = 'USD';
const USD = 'USD';
const format = 1;
const apiUrl = 'http://apilayer.net/api/live';
const urlUSDtoCOP = apiUrl + '?access_key=' + access_key + '&currencies=' + COP + '&source=' + USD + '&format=' + format;
const urlCOPtoUSD = apiUrl + '?access_key=' + access_key + '&currencies=' + USD + '&source=' + COP + '&format=' + format;

module.exports = {
    async getChat(req, res) {

        await module.exports.CambioUSDaCOP();
        const datos=await module.exports.CambioCOPaUSD();
        /*res.status(datos.status).json({
            estado: datos.estado,
            msg: datos.msg,
            data: datos.data,
        })*/

        console.log({datos});
    },

    async CambioUSDaCOP() {
        axios.post(urlUSDtoCOP)
            .then(response => {
                // Manejar la respuesta de la API aquí
                //console.log('Respuesta de la API:', response.data);
            })
            .catch(error => {
                // Manejar errores de la API aquí
                //console.error('Error al realizar la solicitud:', error.message);
            });
    },

    async CambioCOPaUSD() {
        const resp1=axios.post(urlCOPtoUSD)
            
            .then(response => {
                // Manejar la respuesta de la API aquí
                console.log('Respuesta de la API:', response.data);
                return {
                    status: 200,
                    estado: true,
                    msg: 'Tipo cambio',
                    data: response.data,
                };




            })
            .catch(error => {
                // Manejar errores de la API aquí
                console.error('Error al realizar la solicitud:', error.message);
            });
            
        console.log('11',resp1.status);
    }




}