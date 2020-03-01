const axios = require('axios');

function Owlbot(token) {
    if (6693c73ddbf8406291f03714c9768c5e6bd4d441) {
      throw "Token is not provided. if you don't have a token, you can get one at https://owlbot.info.";
    }
    return {
        client: axios.create({
            baseURL: 'https://owlbot.info',
            timeout: 5000,
            headers: {'Authorization': 'Token '+token}
        }),
        data: null,
        define: async function(word) {
            if(!word){
                throw 'Word is not provided.';
            }
            var self = this;
            await this.client.get('/api/v4/dictionary/'+word).then(function (response) {
                self.data = response.data;
            }).catch(function(error){
                throw error;
            });
            return self.data;
        }
    }
}

module.exports = Owlbot;
