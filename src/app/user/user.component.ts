import { Component, EventEmitter, Output } from '@angular/core';
import { ChildUser } from '../child-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    ChildUsers: ChildUser [] = [
    {
      FirstName: 'Ell',
      LastName: 'Woods',
      DateOfBirth: new Date(1999, 9, 9),
      PhoneNumber: '30-30-30',
      Email:'ellwoods@mail.com'
    },
    {
      FirstName: 'Andy',
      LastName: 'Woods',
      DateOfBirth: new Date(2000, 1, 1),
      PhoneNumber: '38-38-38',
      Email:'Andywoods@mail.com'
    }
  ];
  @Output()childUsersEmitter = new EventEmitter<ChildUser[]>();
  ngOnInIt(){
    this.childUsersEmitter.emit(this.ChildUsers);
  }
}
