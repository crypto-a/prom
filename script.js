function moveButton() {
  var button = document.querySelector('.btn-no');
  var rect = button.getBoundingClientRect();

  var minX = 15;
  var maxX = window.innerWidth - rect.width - 15;
  var minY = 15;
  var maxY = window.innerHeight - rect.height - 15;

  var x = Math.random() * (maxX - minX) + minX;
  var y = Math.random() * (maxY - minY) + minY;

  button.style.left = x + 'px';
  button.style.top = y + 'px';
}

  
  function acceptInvitation() {
    alert("Great! I'm looking forward to it!");
  }
  