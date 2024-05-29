document.addEventListener('DOMContentLoaded', () => {
    const animateElement = document.getElementById('ani3');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // 시작 버튼 클릭 이벤트
    startBtn.addEventListener('click', () => {
        animateElement.style.animationPlayState = 'running';
    });

    // 일시정지 버튼 클릭 이벤트
    pauseBtn.addEventListener('click', () => {
        animateElement.style.animationPlayState = 'paused';
    });
});

