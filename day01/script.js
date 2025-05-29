const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen:', $screen);
console.log('toggleButton:', $toggleButton);

if ($screen && $toggleButton) {
  //첫번째 아규먼트: 문자열(이벤트 이름)
  //두번째 아규먼트: 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert('하하');
  }

  //$toggleButton.addEventListener('click', clickBtn);
  //   $toggleButton.addEventListener('click', function () {
  //     alert('호호');
  //   });
  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn: ', stopWatchOn);
    $toggleButton.innerText = stopWatchOn ? '■' : '▶';
    //$toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    $toggleButton.classList.toggle('stop-color');
    if(stopWatchOn) {
      //첫번째 인자: 콜백함수
      //두번째 인자: Number - ms
      timeInterval = setInterval( () => {
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0');
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0');
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);

    } else {

    }

  });
}
