window.onscroll = function (e) {  
  if(window.pageYOffset === 0) {
    document.querySelector('header').style.backgroundColor = ''
  } else {
    document.querySelector('header').style.backgroundColor = '#1a202c';
  }
} 