let div = document.getElementById('resizer');

let handle = document.createElement('div');
handle.classList.add('handle');

//Append Child to Element
div.appendChild(handle);
//box function onmousemove
handle.addEventListener('mousedown', initResize, false);

//Window funtion mousemove & mouseup
function initResize(e) {
  window.addEventListener('mousemove', Resize, false);
  window.addEventListener('mouseup', stopResize, false);
}
//resize the element
function Resize(e) {
  div.style.width = e.clientX - div.offsetLeft + 'px';
}
//on mouseup remove windows functions mousemove & mouseup
function stopResize(e) {
  window.removeEventListener('mousemove', Resize, false);
  window.removeEventListener('mouseup', stopResize, false);
}

console.log('%cWayne 🦇', 'color:black');
