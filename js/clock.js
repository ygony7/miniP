// id가 clock인 문서객체를 들고옴
const clock = document.querySelector("#clock");

// interval 함수에 콜백함수로 넣어주기 위해, 함수 만듦
function getTime() {
    // 현재 시간을 가져오는 객체
    const date = new Date();
    // 00:00:00 포멧을 맞추기 위해 String의 padStart메소드 사용
    // 숫자형을 문자형으로 바꿀대 앞으로 숫자로 연산할 일이 있는지 생각하고 바꾸는 게 좋다.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    // return으로 현재 시간 넣기
    return `${hours}:${minutes}:${seconds}`;
}
clock.innerHTML = getTime();
// 실시간 움직임 : interval 함수 사용하여 1초마다 반복 setInterval(함수,시간)
setInterval(()=>{clock.innerHTML=getTime();},1000); // 익명함수, 1초 = 1000

