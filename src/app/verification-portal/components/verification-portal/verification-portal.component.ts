import { Component } from '@angular/core';
import { ComponentsRoutes } from 'src/app/shared/utils/components-routes';
import { portalOfficerTabCol } from '../../models/verification-portal-officer';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-verification-portal',
  templateUrl: './verification-portal.component.html',
  styleUrls: ['./verification-portal.component.scss'],
})
export class VerificationPortalComponent {

  componentRoutes = ComponentsRoutes;

  officerTanCol = portalOfficerTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Verification Portal Officer',
    rowStatus: { toggleBtn: true },
    rowActions: { edit: true, delete: true },
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
    { id:1, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210' },
    { id:2, name: 'Kapil', email: 'dfsdfsf', phoneNumber: '7485963210' },
    { id:3, name: 'Akul', email: 'dfsdfsf', phoneNumber: '7485963210' },
    { id:4, name: 'Rohit', email: 'dfsdfsf', phoneNumber: '7485963210' },
    { id:5, name: 'Ram', email: 'dfsdfsf', phoneNumber: '7485963210' },
    { id:6, name: 'Rahul', email: 'dfsdfsf', phoneNumber: '7485963210' },
  ];
}
