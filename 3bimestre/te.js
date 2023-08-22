function soma(x){
    if(x == 1){
        console.log(1);
        return 1;
    }
    else{
        var res = x+soma(x-1);
        console.log(res);
        return res;
    }
}

soma(10);
//console.log(soma(10));