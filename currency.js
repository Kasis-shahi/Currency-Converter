const fromDropDown=document.querySelector("#from-currency-select");
const toDropDown=document.querySelector("#to-currency-select");
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

//todo creating drop-down options of  from currency-js file

currencies.forEach((currency)=>{
    const option= document.createElement("option");
    option.value=currency;
    option.text=currency;
     if(currency==="USD"){
        option.selected=true;
    }
    fromDropDown.append(option);
    
});

//creating drop-down options of  to currency-js file
currencies.forEach((currency)=>{
    const option= document.createElement("option");
    option.value=currency;
    option.text=currency;
    if(currency==="NPR"){
        option.selected=true;
    }
   
    toDropDown.append(option);
});

// todo function which will work 

let currencyConvert= async()=>{
const amount=document.querySelector("#amount").value;

const fromCurrency=fromDropDown.value;
const toCurrency=toDropDown.value;

//if input is empty

if(amount===""){
    alert("Please fill the amount");
}else{
const response=await fetch(api);
const data = await response.json();
// console.log(data);

//todo here, it will use the option value which is selected and get their values
let fromExchange= data.conversion_rates[fromCurrency];

let toExchange= data.conversion_rates[toCurrency];

//todo the actual answer
const answerAmount= (amount/fromExchange)*toExchange;
const roundAnswer=answerAmount.toFixed(3);
let result=document.querySelector("#result");
result.textContent=`${amount} ${fromCurrency}= ${roundAnswer} ${toCurrency}`;

}


}


document.querySelector("#convert-button").addEventListener("click",currencyConvert);
 window.addEventListener("load",currencyConvert)