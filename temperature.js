// celsius to fahrenheit
// T(ºC)x1.8 +32

function convert(oc){
    return oc*1.8+32;
}
let input = prompt("請輸入溫度");
let result = convert(input);
alert("換算後的溫度為" +result +"ºF"); 