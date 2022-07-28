var todos = document.getElementsByClassName('todo');

for (let i of todos) {
  // To apply line-through style to text when checkbox is clicked
  i.getElementsByTagName('input')[0].addEventListener('change', function () {
    if (this.checked) {
      i.getElementsByTagName('p')[0].style.textDecoration = 'line-through';
      i.getElementsByTagName('span')[0].style.textDecoration = 'line-through';
    } else {
      i.getElementsByTagName('p')[0].style.textDecoration = 'none';
      i.getElementsByTagName('span')[0].style.textDecoration = 'none';
    }
  });
}
