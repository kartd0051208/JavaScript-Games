let answer = Math.floor(Math.random()*100);
let n1 = 0;
let n2 = 99;

while(true){
    let guess = prompt("make your guess :(between"+ n1+"and"+n2 +")");
    
    if(guess<n1||guess>n2){
        alert("please enter a valid input");
        continue;
    }

    if(guess == answer){
        alert("this secret number is "+answer+".");
        alert("you win the grame");
        break
    }else if (guess <=answer){
        n1=guess;
    }else if (guess>answer){
        n2=guess;
    }

}