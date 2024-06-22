document.addEventListener("DOMContentLoaded", function() {
    var loading = document.getElementById("loading");
    var content = document.getElementById("content");

    // Simulate a load delay for demonstration
    setTimeout(function() {
        loading.style.display = "none";
        content.style.display = "block";
    }, 7000); // 2 seconds delay
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const links = document.querySelectorAll('.random-link');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    links.forEach(link => {
        const randomX = Math.random() * (containerWidth - link.offsetWidth);
        const randomY = Math.random() * (containerHeight - link.offsetHeight);
        link.style.left = `${randomX}px`;
        link.style.top = `${randomY}px`;
    });
});

document.getElementById('bold').addEventListener('click', function() {
    window.open('https://joonfont.com/forum/?mod=document&uid=26');
});

document.getElementById('kerning').addEventListener('click', function() {
    window.open('https://ko.wikipedia.org/wiki/%EC%BB%A4%EB%8B%9D');
});

document.getElementById('line-spacing2').addEventListener('click', function() {
    window.open('https://ko.wikipedia.org/wiki/%EC%9E%90%EA%B0%84');
});

document.getElementById('line-spacing').addEventListener('click', function() {
    window.open('https://ko.wikipedia.org/wiki/%ED%96%89%EA%B0%84');
});

document.getElementById('indentation').addEventListener('click', function() {
    window.open('https://ko.wikipedia.org/wiki/%EB%93%A4%EC%97%AC%EC%93%B0%EA%B8%B0');
});



const consonants = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        
        // p 요소 선택
        const paragraph = document.getElementById('ja');
        
        // 원래 텍스트 가져오기
        const originalText = paragraph.textContent;
        
        // 새로운 HTML 생성
        let newHTML = '';
        for (let char of originalText) {
            if (consonants.includes(char)) {
                newHTML += `<span class="consonant">${char}</span>`;
            } else {
                newHTML += char;
            }
        }
        
        // 새로운 HTML 설정
        paragraph.innerHTML = newHTML;