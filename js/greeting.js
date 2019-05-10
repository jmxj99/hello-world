const userName = prompt('What is your name?');

const verifyName = function verifyName(){
    if(userName === 'Jasmine'){
        console.log('Hooray');
    }
    else{
        console.log('oops');
    }
};
    
verifyName();