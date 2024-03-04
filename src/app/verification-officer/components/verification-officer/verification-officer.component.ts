import { Component } from '@angular/core';
import { verificationOfficerTabCol } from '../../models/verification-officer';
import { TableConfig } from 'src/app/shared/models/table-config';
import { ModalConfig } from 'src/app/shared/models/modal-config';

@Component({
  selector: 'app-verification-officer',
  templateUrl: './verification-officer.component.html',
  styleUrls: ['./verification-officer.component.scss'],
})
export class VerificationOfficerComponent {
  officerTanCol = verificationOfficerTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Verification Officer',
    rowStatus: { toggleBtn: true },
    rowActions: { view: true, delete: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.officerTanCol[0].name,
    isAdd: true,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id:1, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
    { id:2, name: 'Kapil', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
    { id:3, name: 'Akul', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
    { id:4, name: 'Rohit', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
    { id:5, name: 'Ram', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
    { id:6, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210', lgaCode: 'dfsfsdf', address:'Indore' },
  ];
}
