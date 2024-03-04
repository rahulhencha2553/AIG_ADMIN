import { Component } from '@angular/core';
import { ModalConfig } from 'src/app/shared/models/modal-config';
import { TableConfig } from 'src/app/shared/models/table-config';
import { ApiPlans, apiPlanCol } from '../../models/api-plans';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {

  apiPlanCol = apiPlanCol;
  tableConfig: TableConfig = {
    tableHeader: 'Plans',
    rowActions: { edit: true, delete: true},
    withPagination: true,
    profileKey: this.apiPlanCol[0].name,
  };

  modalData: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    { id: 1, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
    { id: 2, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
    { id: 3, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
    { id: 4, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
    { id: 5, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
    { id: 6, planName: 'saver', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore', noOfRequests: '9',price:'1000' },
  ];
}
