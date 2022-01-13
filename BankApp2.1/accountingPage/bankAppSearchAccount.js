let searchDataBase = JSON.parse(localStorage.getItem("dataBase"));

let searchInput = document.querySelector("#search-input");
let btnSearchAcnt = document.querySelector("#btnSearchAcnt");
let accountsBody = document.querySelector(".accounts-body");

btnSearchAcnt.addEventListener("click", search);

let accounts = [];

function search() {
  accounts = [];
  displayResults();

  for (let i = 0; i < db.length; i++) {
    if (db[i].first === searchInput.value) {
      accounts.push(db[i]);
    }
  }
  displayResults();
  searchInput.value = "";
}

function displayResults() {
  console.log(accounts);
  let text = "";
  for (let i = 0; i < accounts.length; i++) {
    text += ` <tr>
        <th scope="row" >${i + 1}</th> 
        <td>${accounts[i].first}</td>
        <td>${accounts[i].last}</td>
        <td>${accounts[i].deposit}</td>
        <td>${accounts[i].card}</td>
     </table>`;
  }
  accountsBody.innerHTML = text;
}
