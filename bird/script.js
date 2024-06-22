document.addEventListener('DOMContentLoaded', function() {
  const mainDiv = document.getElementById('main');

  function redirectToMainPage() {
    const mainPageURL = 'bird.html';
    window.location.href = mainPageURL;
  }

  mainDiv.addEventListener('click', redirectToMainPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const aboutDiv = document.getElementById('about');

  function redirectToAboutPage() {
    const aboutPageURL = 'about.html';
    window.location.href = aboutPageURL;
  }

  aboutDiv.addEventListener('click', redirectToAboutPage);
});


//개인 프로필 페이지 링크

document.addEventListener('DOMContentLoaded', function() {
    const jikDiv = document.getElementById('jik');

    function redirectToAboutPage() {
      // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
      const jikPageURL = 'jik.html';

      // 현재 창에서 새 HTML 파일 열기
      window.location.href = jikPageURL;
    }

    // about div에 클릭 이벤트 추가
    jikDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const kkaDiv = document.getElementById('kka');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const kkaPageURL = 'kka.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = kkaPageURL;
  }

  // about div에 클릭 이벤트 추가
  kkaDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const chamDiv = document.getElementById('cham');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const chamPageURL = 'cham.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = chamPageURL;
  }

  // about div에 클릭 이벤트 추가
  chamDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const parkDiv = document.getElementById('park');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const parkPageURL = 'park.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = parkPageURL;
  }

  // about div에 클릭 이벤트 추가
  parkDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const metDiv = document.getElementById('met');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const metPageURL = 'met.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = metPageURL;
  }

  // about div에 클릭 이벤트 추가
  metDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const sparkDiv = document.getElementById('spark');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const sparkPageURL = 'spark.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = sparkPageURL;
  }

  // about div에 클릭 이벤트 추가
  sparkDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const redDiv = document.getElementById('red');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const redPageURL = 'red.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = redPageURL;
  }

  // about div에 클릭 이벤트 추가
  redDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const ggDiv = document.getElementById('gg');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const ggPageURL = 'gg.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = ggPageURL;
  }

  // about div에 클릭 이벤트 추가
  ggDiv.addEventListener('click', redirectToAboutPage);
});

document.addEventListener('DOMContentLoaded', function() {
  const qungDiv = document.getElementById('qung');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const qungPageURL = 'qung.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = qungPageURL;
  }

  // about div에 클릭 이벤트 추가
  qungDiv.addEventListener('click', redirectToAboutPage);
});


document.addEventListener('DOMContentLoaded', function() {
  const jipDiv = document.getElementById('jip');

  function redirectToAboutPage() {
    // 이동하길 원하는 다른 HTML 파일의 경로를 입력하세요.
    const jipPageURL = 'jip.html';

    // 현재 창에서 새 HTML 파일 열기
    window.location.href = jipPageURL;
  }

  // about div에 클릭 이벤트 추가
  jipDiv.addEventListener('click', redirectToAboutPage);
});





const gridItems = document.querySelectorAll('.left, .right');
  gridItems.forEach(item => {
    item.style.overflow = 'auto';
  });


  $('.gallery').masonry({
    itemSelector: '.card',
    columnWidth: 160
  });
  

  var category = document.getElementById("category");
  // 배경색을 변경할 요소 가져오기
  var jik = document.getElementById("jik");

  // 카테고리를 클릭했을 때 이벤트 처리
  category.addEventListener("click", function() {
    // jik 요소의 배경색 변경
    jik.style.backgroundColor = "red";
  });