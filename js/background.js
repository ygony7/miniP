// 배경이미지 이름을 배열에 저장
const images = ["BG0.jpg", "BG1.jpg", "BG2.jpg", "BG3.jpg"];

// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 수 정수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근 가능
const randomNum = Math.floor(Math.random()*images.length);
const choseImage = images[randomNum]; // 알아보기 쉽기 위해

// body 객체를 가져옴
const bodyBackground = document.querySelector('body');

// body에 이미지 추가
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.height = "100vh";  // 화면에 따라 높이가 바뀜 
bodyBackground.style.backgroundImage = `url(./img/${images[randomNum]})`;
bodyBackground.style.backgroundRepeat = "no-repeat";
bodyBackground.style.backgroundSize = "cover";
bodyBackground.style.backgroundPosition = "center";
