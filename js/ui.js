class UI {
    constructor(){
        this.init();
    }
    init(){
        this.printCryptoCurrencies();
    }
    //prints the options for the method
    printCryptoCurrencies(){

        //console.log(cryptoAPI.getCryptoCurrenciesList());
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;

//                console.log(cryptoCurrencies);
                //build the <select> from the rest API
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    //add the options
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                     
                })
            })
    }
    // for printing a message -> two params
    printMessage(message, className){

        const div = document.createElement('div');

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');

        messagesDiv.appendChild(div);

        setTimeout(()=>{
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    // for printing the result of the evalutation

    displayResult(result, currency){

        
        
        //read the currency

        let currencyName;
        
        currencyName = 'price_' + currency.toLowerCase();

        //console.log(result);
        
        //get the value

        let value = result[currencyName];
        //console.log(currencyName + ' ' + value);

        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        let HTMLTemplate = '';

        HTMLTemplate += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                        <p> The price of ${result.name} in ${currency} is  ${value} </p>
                        <p> Last hour: ${result.percent_change_1h} %</p>
                        <p> Last day: ${result.percent_change_7d} %</p>
                        <p> Last seven days: ${result.percent_change_24h} %</p>
                </div>
            </div>
        `;
        //insert the spinner in page
        this.showSpinner();

        setTimeout(() => {
            
            //print the results
            const divResult =document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;

            //hide the spinner
            document.querySelector('.spinner img').remove();
        },2000);
        
        
        //console.log(HTMLTemplate);
        
        
    }
    showSpinner (){
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}