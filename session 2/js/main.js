const userTable = document.querySelector("#users-table");
const addUserBtn = document.querySelector("#add-new-user");
const users = JSON.parse(localStorage.getItem("users")) || [];

const saveUsersToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
};

const addUser = (username, balance) => {
  const user = {
    id: users.length,
    username,
    balance,
  };

  users.push(user);
  saveUsersToLocalStorage();
};

const editUser = (id) => {
  let newBalance = Number(prompt("enter new balance"));
  while (isNaN(newBalance))
    newBalance = Number(prompt("enter new balance, (must be a number)"));

  const index = users.findIndex((user) => user.id == id);
  if (index === -1) alert("user not found");
  else {
    users[index].balance = newBalance;
    saveUsersToLocalStorage();
  }
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id == id);
  if (index === -1) alert("user not found");
  else {
    users.splice(index, 1);
    saveUsersToLocalStorage();
  }
};

const renderUsers = () => {
  const usersMap = users.map(
    (user) => `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.username}</td>
    <td>${user.balance}</td>
    <td><button onclick= editUser(${user.id}) class="btn btn-warning">edit</button></td>
    <td><button onclick= deleteUser(${user.id}) class="btn btn-danger">delete</button></td>
  </tr>`
  );

  userTable.innerHTML = usersMap.join("");
};

renderUsers();

addUserBtn.addEventListener("click", () => {
  const username = prompt("enter username");
  let balance = Number(prompt("enter new balance"));
  while (isNaN(balance))
    balance = Number(prompt("enter new balance, (must be a number)"));

  addUser(username, balance);
});
