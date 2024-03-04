import { Component } from '@angular/core';
import { apiUserTabCol } from '../../models/api-users';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  apiUserCol = apiUserTabCol
  tableConfig: TableConfig = {
    tableHeader: 'Users',
    rowStatus: { toggleBtn: true },
    rowActions: { edit: true, delete: true, view: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.apiUserCol[0].name,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id: 1, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210',},
    { id: 2, name: 'Kapil', email: 'dfsdfsf', phoneNumber: '7485963210',},
    { id: 3, name: 'Akul', email: 'dfsdfsf', phoneNumber: '7485963210',},
    { id: 4, name: 'Rohit', email: 'dfsdfsf', phoneNumber: '7485963210',},
    { id: 5, name: 'Ram', email: 'dfsdfsf', phoneNumber: '7485963210',},
    { id: 6, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210',},
  ];
}
