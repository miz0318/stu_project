let target = document.querySelector("#dynamic");


function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to JS","Learn to Python", "Learn to RUBY" ]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length )];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}


//타이핑 리셋
function resetTyping(){
    target.textContent ="";
    dynamic(randomString());
}

// 한글자씩 타이핑효과를 주는 함수
function dynamic(randomArr){
    //console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    // 더이상 출력할 문자가 없다면 
    }else{
        setTimeout(resetTyping, 3000)
    }
}

//dynamic(selectStringArr);
dynamic(randomString());

//console.log(selectString);
//console.log(selectStringArr);

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);