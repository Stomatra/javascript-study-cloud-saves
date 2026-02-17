function sum1ToN(n){
    if(!Number.isInteger(n)||n<1) return null;

    let sum=0;
    for(let i=1;i<=n;i++) sum += i;
    return sum;
}

console.log(sum1ToN(5));
console.log(sum1ToN(1.2));
console.log(sum1ToN(-1));