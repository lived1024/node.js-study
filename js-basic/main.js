let boxEl = document.querySelector('.box')    // HTML 요소 1개 검색/찾기
console.log(boxEl.textContent)
boxEl.textContent = "TEST!!"
console.log(boxEl.textContent)

boxEl.addEventListener('click', function() {
  console.log('Click~')
  boxEl.classList.add('active')
  console.log(boxEl.classList.contains('active'))
  boxEl.classList.remove('active')
  console.log(boxEl.classList.contains('active'))
});

const boxEls = document.querySelectorAll('.box')
boxEls.forEach(function (el, idx) {       // boxEls.forEach((el, idx) => { 
  el.classList.add(`order-${idx + 1}`)
  console.log(idx, el)
})



/* 아래는 요소에 이벤트를 추가할 수 있는 예시

  // HTML 요소에 적용할 수 있는 메소드
  boxEl.addEventListener();
  
  // 인수(Arguments) 추가 가능!
  boxEl.addEventListener(1, 2);
  
  // 1 - 이벤트(Event, 상황)
  boxEl.addEventListener('click', 2);
  
  // 2 - 핸들러(Handler, 실행할 함수)
  boxEl.addEventListener('click', function() {
    console.log('Click~')
  });
*/


/*
// 아래는 Element에 클래스 추가 및 삭제 예시
boxEl.classList.add('active')
let isContains = boxEl.classList.contains('active')
console.log(isContains)   // true

boxEl.classList.remove('active')
isContains = boxEl.classList.contains('active')
console.log(isContains)   // false
*/


/* 아래는 forEach 예시
const boxEls = document.querySelectorAll('.box')
console.log(boxEls)

boxEls.forEach(function() {})
boxEls.forEach(function(element, index){})
boxEls.forEach(function(element, index){
  element.classList.add(`order-${index + 1}`)
  console.log(index, element)
}) 

// 익명 함수 사용 이외에도 화살표 함수 사용방식은 아래와 같다
boxEls.forEach((el, idx) => {
  el.classList.add(`order-${idx + 1}`)
  console.log(idx, el)
})
*/