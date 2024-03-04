import { Component } from '@angular/core';
import { emergencyRequestTabCol } from '../../models/emergency-requests';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-emergency-requests',
  templateUrl: './emergency-requests.component.html',
  styleUrls: ['./emergency-requests.component.scss'],
})
export class EmergencyRequestsComponent {
  emergencyReqCol = emergencyRequestTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Emergency Service History',
    rowStatus: { label: true },
    rowActions: { delete: true, view: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.emergencyReqCol[0].name,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id: 1, userName: 'Rahul',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
    { id: 2, userName: 'Kapil',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
    { id: 3, userName: 'Akul',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
    { id: 4, userName: 'Rohit',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
    { id: 5, userName: 'Ram',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
    { id: 6, userName: 'Rahul',  userContact: '7485963210',emergency:'fire',  emergencyType:'imagename', address:'indore', blockCode:'medical',date:'1234' },
  ];
}
