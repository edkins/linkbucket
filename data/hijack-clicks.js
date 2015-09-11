function click_handler(e)
{
  if (e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey)
  {
    var text = e.target.textContent.trim();
    text = text.replace('[','(').replace(']',')');
    self.port.emit('append', '\n* [' + e.target.href + ' ' + text + ']');
    e.preventDefault();
    e.target.style.background = 'grey';
  }
}

function on_load()
{
  var elements = document.getElementsByTagName('a');
  var i;

  for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', click_handler, true);
  }
}

on_load();

