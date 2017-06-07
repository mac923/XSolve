var users = [];
var allUsersLoaded = false;
var usersEl = document.getElementById('users');

function loadUsers() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      users = JSON.parse(this.responseText);
      simulateReq();
    }    
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}

function simulateReq() {
  if (allUsersLoaded) return;

  var usersLoadedInSimulatedReq = users.splice(0, 3);
  for (var user of usersLoadedInSimulatedReq) {
    var container = document.createElement('div');
    var cUser = document.createElement('div');
    var cUserName = document.createElement('h3');
    var cUserMail = document.createElement('span');
    var fragment = document.createElement('p');

    cUserName.innerHTML = user.name;
    cUserMail.innerHTML = user.email;
    fragment.innerHTML = user.company.catchPhrase;

    container.classList.add('col-sm-4');
    cUser.classList.add('c-user');
    cUserName.classList.add('c-user__name');
    cUserMail.classList.add('c-user__mail');

    usersEl.appendChild(container);
    container.appendChild(cUser);
    cUser.appendChild(cUserName);
    cUser.appendChild(cUserMail);
    cUser.appendChild(fragment);
  }

  if (usersLoadedInSimulatedReq.length !== 3) {
    hideLoadButton();
    allUsersLoaded = true;
  }
}

function hideLoadButton() {
  var loadBtn = document.getElementById('load');
  loadBtn.classList.add("disabled");
}
