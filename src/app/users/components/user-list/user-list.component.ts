import { Component } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/models/column-config';
import { TableConfig } from 'src/app/shared/models/table-config';
import { userTableCol } from '../../models/user';
import { ModalConfig } from 'src/app/shared/models/modal-config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userTabColData = userTableCol;

  tableConfig: TableConfig = {
    tableHeader: 'Users List',
    rowActions: { delete: true },
    rowStatus: { toggleBtn: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.userTabColData[0].name,
  };
  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id:1, name: 'Rahul', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
    { id:2, name: 'Kapil', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
    { id:3, name: 'Akul', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
    { id:4, name: 'Rohit', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
    { id:5, name: 'Ram', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
    { id:6, name: 'Rahul', email: 'dfsdfsf', phoneNumber: 'dfsf', date: 'dfsfsdf' },
  ];


  deleteData(event:any){
     console.log('user-list-com',event);
  }
}
