function checknum(){
let name=prompt("Enter student's name");
let mark1=Number(prompt("Enter your English mark"));
if(mark1<0||mark1>100||isNaN(mark1)){
     alert(`Invalid input \n Please refresh the page to try again`)
    return
}
let mark2=Number(prompt("Enter your science mark"));
if(mark2<0||mark2>100||isNaN(mark2)){
    alert(`Invalid input \n Please refresh the page to try again`)
    return
}
let mark3=Number(prompt("Enter your social science mark"));
if(mark3<0||mark3>100||isNaN(mark3)){
     alert(`Invalid input \n Please refresh the page to try again`)
    return
}
let total=mark1+mark2+mark3;
let avg=total/3;
if(avg>=90){
    a="Grade A"
}
else if(avg>=75){
    a="Grade B"
}
else if(avg>=50){
    a="Grade C"
}
else{
    a="Grade F"
}
alert(`Name:${name} \n Your Total is:${total} \n Your Average is:${avg} \n You are shortlisted into:${a}`);
if(confirm("Do you want to check another student's result")){
    location.reload();
}
}
checknum()