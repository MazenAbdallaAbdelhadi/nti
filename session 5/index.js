const Users = require("./modules/User.js");
const yargs = require("yargs");

const users = new Users();

yargs.command({
  command: "addUser",
  builder: {
    name: {
      type: "string",
      demandOption: true,
    },
    balance: {
      type: "number",
      demandOption: true,
    },
  },
  handler: function (argv) {
    users.save(argv.name, argv.balance);
  },
});

yargs.command({
  command: "editbalance",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
    balance: {
      type: "number",
      demandOption: true,
    },
  },
  handler: function (argv) {
    users.editBalance(argv.id, argv.balance);
  },
});

yargs.command({
  command: "showAll",
  handler: function () {
    users.showAll();
  },
});

yargs.command({
  command: "deleteUser",
  builder: {
    id: {
      type: "number",
      demandOption: true,
    },
  },
  handler: function (argv) {
    users.deleteUser(argv.id);
  },
});

yargs.argv;
