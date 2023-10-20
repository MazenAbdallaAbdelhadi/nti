import { Component } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor() {}

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      this.users = await res.json();
      this.filteredUsers = this.users;
    } catch (err) {
      console.log(err);
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter((user) => user.id !== userId);
    this.filteredUsers = this.users;
  }

  search() {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
    );
  }
}
