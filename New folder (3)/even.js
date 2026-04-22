function isEven(num){
    if (num % 2 == 0)
{
    return "Even number";
}
else{
    return"Odd number";
}
}
let data ={
    "number":9
};
console.log(isEven(data.number));

module.exports={isEven};