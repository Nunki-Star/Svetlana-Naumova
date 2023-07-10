/*function calculator(a, b, operation){
    switch (operation){
        case "+" :
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            console.log(a-b);
            break
    }
}
calculator(6, 1, "-")*/

/*function calc(a, b, operation){
    switch(operation){
        case "+":
            return(a+b);
            
        case "-":
            return(a-b);
            
        case "*":
            return(a*b);
           
        case "/":
            return(a/b)

    }
}

var item1=calc(7, 6, "-");
var item2=calc(9, 9, "/")

console.log(item1+item2)*/

var x = null, y = null, operVariable = ""

function getNumber(num){
    
        if(x === null){
            x=num
        }
        else{
            y=num
        }
    }

    function getOperation(oper){
        operVariable = oper
    }

    function result(){
        var EL = document.getElementById('result');

        switch(operVariable){
            case "+": 
                EL.innerText = x+y;
                break;
            case "-": 
                EL.innerText = (x-y).toString();
                break;
            case "*": 
                EL.innerText = (x*y).toString();
                break
            case "/":
                EL.innerText = (x/y).toString();
                break
    
        }
    }


