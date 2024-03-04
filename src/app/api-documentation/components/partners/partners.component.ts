import { Component } from '@angular/core';
import { apiUserTabCol } from '../../models/api-users';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';
import { apiPartners } from '../../models/api-partners';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  
  apiPartnersCol = apiPartners

  tableConfig: TableConfig = {
    tableHeader: 'Partners',
    rowActions: { edit: true, delete: true},
    withPagination: true,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id: 1, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
    { id: 2, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
    { id: 3, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
    { id: 4, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
    { id: 5, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
    { id: 6, partnerName:'dollop infotech indore',partnerImage:'assets/images/temp_img/partners.png'},
  ];
} 
