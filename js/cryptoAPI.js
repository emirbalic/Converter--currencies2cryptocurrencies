class CryptoAPI {
    // query the restapi
    async queryAPI(currency, cryptocurrency){
        
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        const result = await url.json();

        return {
            result
        }
    }

    // Get all the cryptocurrencies query the api end point
    async getCryptoCurrenciesList(){
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/?sort=id');

        const cryptoCurrencies = await url.json();

        //return the object

        return {
            cryptoCurrencies
        }
    }
    
}