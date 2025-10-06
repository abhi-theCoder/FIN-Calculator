let finResult = document.getElementById('finResult');
let params = new URLSearchParams(window.location.search);
let fin = params.get('val');

fin = (fin * 12) / 0.06;
finResult.innerText = "$" + fin;