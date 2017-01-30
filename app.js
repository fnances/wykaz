console.log(JSON);

let selectedMonth = 'Januar';

let select = document.getElementById('months-select');
let h2 = document.getElementById('header-month');

let createTR = function (JSON, month) {
  var trs = JSON
  .filter((v) => new Date(v['Ausgestellt']).toUTCString().toLowerCase().includes(select.value))
  .map(function (obj, i) {
    let {KassenID, BelegNR, Umsatzzaehler, Ausgestellt, taxdifference, taxnormal, taxspecial, taxreduced1, taxreduced2, taxnull } = obj;
    var tr = `
    <tr>
      <td>${new Date(Ausgestellt).toUTCString()}</td>
      <td> ${BelegNR}</td>
      <td>${KassenID}</td>
      <td>${Umsatzzaehler} &euro;</td>
      <td>${taxdifference} &euro;</td>
      <td>${taxnormal} &euro;</td>
      <td>${taxnull} &euro;</td>
      <td>${taxreduced1} &euro;</td>
      <td>${taxreduced2} &euro;</td>
      <td>${taxspecial} &euro;</td>
    </tr>
    `;

    return tr;
  });

  return trs;

};

document.getElementById('tbody').innerHTML = createTR(JSON, 'jan').join('');

select.addEventListener('change', function (e) {
  // selectedMonth = Array.from(select.children).filter(child => child.value === select.value)[0].innerHTML;
  document.getElementById('tbody').innerHTML = createTR(JSON, select.value).join('');
});
