const fromDropDown=document.querySelector("#from-currency-select");
const toDropDown=document.querySelector("#to-currency-select");
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
let result=document.querySelector("#result");

const initialValue=document.querySelector("#amount")



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

//todo creating drop-down options of  to currency-js file
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
initialValue.value="";

//todo special features as i click in drop down, result seems vacant, only when i clic in convert, it shows;
 toDropDown.addEventListener("change",()=>{
    result.textContent="";
 });
 fromDropDown.addEventListener("change",()=>{
    result.textContent="";
 });

const fromCurrency=fromDropDown.value;

const toCurrency=toDropDown.value;





//todo if input is empty

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

result.textContent=`${amount} ${fromCurrency}= ${roundAnswer} ${toCurrency}`;

}
}




document.querySelector("#convert-button").addEventListener("click",currencyConvert);
 window.addEventListener("load",currencyConvert);

