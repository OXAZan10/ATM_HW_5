class Calculator {
   
    constructor (){
    };

    add() {
        let resultOfAdding=0;
        for (let i=0; i<arguments.length; i++){
            resultOfAdding+=arguments[i];
        }
        return resultOfAdding;
    }

    multiply(){
        let resultOfMultyply=1;
        for (let i=0; i<arguments.length; i++){
            resultOfMultyply*=arguments[i];
        }
        return resultOfMultyply;
    }

}

module.export = Calculator;
