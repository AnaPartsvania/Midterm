import { Component } from '@angular/core';
import { ChildUser } from './child-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ana Partsvania';
  
  users = [
    {firstname:'Giorgi', lastname: 'Giorgadze', age: 21},
    {firstname:'Mariam', lastname: 'Mamaladze', age: 19},
    {firstname:'Shalva', lastname: 'Dadiani', age: 25},
    {firstname:'Nikoloz', lastname: 'Chavchavadze', age: 18},
  ]

  receivedChildUsers: ChildUser[] = [];
  onChildUserReceived(users: ChildUser[]){
    this.receivedChildUsers = users;
  }
}
