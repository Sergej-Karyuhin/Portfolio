let buttonText = 'Mobile';
let status_0;
let status_1;

if (document.title == 'theyalow') {
  document.getElementById('theyalow__mobile').style.display = 'none';
  status_0 = 'theyalow__mobile';
  status_1 = 'theyalow__desktop';
}
else {
  document.getElementById('repair-design-project__mobile').style.display = 'none';
  status_0 = 'repair-design-project__mobile';
  status_1 = 'repair-design-project__desktop';
}

function swap() {
  if (buttonText == 'Mobile') {
    document.getElementById(status_0).style.display = 'block';
    document.getElementById(status_1).style.display = 'none';
    document.getElementById('button-text').textContent = 'Desktop';
    buttonText = 'Desktop';
  }
  else {
    document.getElementById(status_0).style.display = 'none';
    document.getElementById(status_1).style.display = 'block';
    document.getElementById('button-text').textContent = 'Mobile';
    buttonText = 'Mobile';
  }
}
