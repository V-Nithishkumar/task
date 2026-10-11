function analyser(){
    let con=true
do{
    let num=Number(prompt("Enter a number"))
 if(isNaN(num)){
        alert("Invalid input \n Please press 'ok' to try again")
        location.reload()
        return
    }
    if(num%2==0){
       stats="even"
    }
    else{
        stats="odd"
    }
    // sum of number
    let sum=0
    for(let i=1;i<=num;i++){ sum+=i}
    // multiplication table
    console.log("Multiplication Table")
    for( let i=1;i<=10;i++){
        console.log(`${i}x${num}=${i*num}`)
    }
// pattern generation
if(stats=="even"){
     for(let i=1;i<=num;i++){
         let row = "";
            for (let j=1; j<=num; j++) {
                  row += "* ";
        }console.log(row)
    }
}else{
    for(let i=1;i<=num;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+="* "
        } console.log(row)
    }
}
alert(`The given number ${num} is ${stats} \n\n The sum of values is ${sum}`)
alert("The multipication table and pattern are printed in console.. check it!!")
con=confirm("do you wanna try again")
if(!con){
    alert("Your activity ends here...")
}

}while(con)
}
analyser()

