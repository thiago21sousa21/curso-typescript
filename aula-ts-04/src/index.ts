//
function multiply(num1:number|string, num2:number|string):number|string {
    if(typeof num1==='string')num1 = Number(num1)
    if(isNaN(num1)){
        console.log('num1 precisa ser número!')
        return 'num1 precisa ser número!'
    }
    if(typeof num2==='string')num2 = Number(num1)
    if(isNaN(num2)){
        console.log('num2 precisa ser número!')
        return 'num2 precisa ser número!'
    }
    const mult = num1 * num2;
    return mult
}//:number|string 


function sum( num1:number|string, num2:number|string):number|string {
    if(typeof num1==='string')num1 = Number(num1)
    if(isNaN(num1)){
        console.log('num1 precisa ser número!')
        return 'num1 precisa ser número!'
    }
    if(typeof num2==='string')num2 = Number(num2)
    if(isNaN(num2)){
        console.log('num2 precisa ser número!')
        return 'num2 precisa ser número!'
    }
    const soma = num1 + num2;
    return soma
}
//: boolean 
function isEven(num:number):number{
    return num % 2;
}

function showResult(result:number):void {
    if(!isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it is not even!`);
    }
}

(() => {
    const num1 = "1";
    const num2 = "2";
    
    let resultSoma = sum(num1,num2);
    console.log(resultSoma)
    let resultMulti =  multiply(1,2);
    console.log(resultMulti)

    if(resultSoma === 'string'){
        return resultSoma;    
    }else if(resultMulti === 'string'){
        return resultMulti;
    }else{
        const soma = Number(resultMulti)+Number(resultSoma)
        console.log(soma)
        //const even = isEven(soma)
        //console.log(even)
        showResult(Number(soma))
    }
    

})();

function verificaTipo(valor:any):any{
    const nomeValor = Object.keys(valor)[0];
    if(typeof valor !== 'number'){
        let tryParse = Number(valor);
        if(isNaN(tryParse)){
            const msg = `${nomeValor} deveria ser um numero!`
            console.log(msg)
            return {result: true, msg, value: NaN}
        }
        return {result: false, msg:'ok', value: tryParse}
    }
    return {result: false, msg:'ok', value: valor}
}