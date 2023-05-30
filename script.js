function moveButton() {
    var button = document.querySelector('.btn-no');
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
  
    button.style.left = x + 'px';
    button.style.top = y + 'px';
  }
  
  function acceptInvitation() {
    alert("Great! I'm looking forward to it!");
  }
  