import { Component } from '@angular/core';
import { emergencyOfficerTabCol } from '../../models/emergency-officer';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-emergency-officer',
  templateUrl: './emergency-officer.component.html',
  styleUrls: ['./emergency-officer.component.scss'],
})
export class EmergencyOfficerComponent {
  emergencyCol = emergencyOfficerTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Operator',
    rowStatus: { toggleBtn: true },
    rowActions: { edit: true, delete: true, view: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.emergencyCol[0].name,
    isAdd: true,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id: 1, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
    { id: 2, name: 'Kapil', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
    { id: 3, name: 'Akul', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
    { id: 4, name: 'Rohit', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
    { id: 5, name: 'Ram', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
    { id: 6, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210',emergencyType:'medical',password:'1234' },
  ];
}
