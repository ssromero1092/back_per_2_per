const axios = require('axios');
const Chat = require('./Chat');
const access_key = '85daa250a0ea3921a1eb4b4212ba68e4';
const COP = 'COP';
const USD = 'USD';
const format = 1;
const apiUrl = 'http://apilayer.net/api/live';
const urlUSDtoCOP = apiUrl + '?access_key=' + access_key + '&currencies=' + COP + '&source=' + USD + '&format=' + format;
const urlCOPtoUSD = apiUrl + '?access_key=' + access_key + '&currencies=' + USD + '&source=' + COP + '&format=' + format;

module.exports = {

    async postChat(req, res) {
        const {usuario,valor_entrada,tipo_mensaje } = req.body;
        const timestamp = new Date().getTime();
        console.log({usuario},{valor_entrada},{tipo_mensaje},{timestamp});
        let valor_salida
        

        let datos={};
        if (tipo_mensaje=='USD') {
            datos= await module.exports.CambioUSDaCOP();

            valor_salida=datos.data.quotes.USDCOP
        } else {
            datos= await module.exports.CambioCOPaUSD();
            valor_salida=datos.data.quotes.COPUSD
        }
        console.log(datos.data.quotes);
        const chatlog = new Chat ({
            usuario,
            valor_entrada,
            valor_salida,
            tipo_mensaje,
            timestamp
        });
        
        const graba = await chatlog.save(); 
        console.log(graba);
        res.status(datos.status).json({
            estado: datos.status,
            msg: datos.statusText,
            data: datos.data,
        })

        
    },

    async CambioUSDaCOP() {
        return axios.post(urlUSDtoCOP)
            .then(response => {
                return response
            })
            .catch(error => {
                return datos={
                    status: 201,
                    statusText: error,
                    data: '',
                } 
            });
    },

    async CambioCOPaUSD() {
        return axios.post(urlCOPtoUSD)
            .then(response => {
                return response
            })
            .catch(error => {
                return datos={
                    status: 201,
                    statusText: error,
                    data: '',
                } 
            });
    }




}