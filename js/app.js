// classes instances

const cryptoAPI = new CryptoAPI();

//related to user interface
const ui = new UI();


//variables

const form = document.getElementById('form');


//event listeners

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    //read values from the form

    //currency
    const currencySelect = document.getElementById('currency').value;


    //cryptocurrency
    const cryptocurrencySelect = document.getElementById('cryptocurrency').value;

    

    if(currencySelect === '' || cryptocurrencySelect === ''){
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-panel');
    } else {
        //query RESTAPI
        //console.log(cryptoAPI.queryAPI(currencySelect, cryptocurrencySelect));
        cryptoAPI.queryAPI(currencySelect, cryptocurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0], currencySelect)
            })
    }
})