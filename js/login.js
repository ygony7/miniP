// 입력폼 가져오기 - form의 submit을 이벤트로 사용하기 위해
const loginForm = $("#loginForm");

// input 객체 = name 값 가져오기
const nameInput = $("#loginForm #nameInput");

// name 값을 가질 h1
const hello = $("#hello");

// 이벤트리스너 연결
// form의 submit을 사용할 경우 click 이벤트가 아니라
// form의 submit 이벤트로 연결해 주어야 한다.
loginForm.on("submit", onLoginSubmit);

function onLoginSubmit(e) {
    e.preventDefault();     // 새로고침 막기

    // loginInput의 value값 가져오기
    const name = nameInput.val();

    // if문 사용해서, name값이 없을때, 아래 실행되지 않게
    // 함수에서 return을 사용하면 함수 종료
    if (name == "") {
        alert("이름을 입력해주세요")
        return ;
    }    

    // value값을 hello에 넣어줌
    hello.html(name+"님 반갑습니다!");
    // loginForm, hidden 클래스 추가
    loginForm.addClass("hidden");
    // todoForm을 가져와서 hidden 클래스 제거
    $("#todoForm").removeClass("hidden");
    console.log("확인");
};