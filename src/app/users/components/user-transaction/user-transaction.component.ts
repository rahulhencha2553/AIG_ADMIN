import { Component } from '@angular/core';
import { transactionTabCol } from '../../models/transaction';
import { TableConfig } from 'src/app/shared/models/table-config';
import { ModalConfig } from 'src/app/shared/models/modal-config';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.component.html',
  styleUrls: ['./user-transaction.component.scss'],
})
export class UserTransactionComponent {
  tnxTabCol = transactionTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Transaction',
    rowActions: { view: true },
    isProfileIcon: true,
    profileKey: this.tnxTabCol[0].name,
    withPagination: true,
  };
  modalConfig: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };
  data = [
    {
      name: 'Rahul',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Home',
      amount: '50000',
    },
    {
      name: 'Kapil',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Shop',
      amount: '50000',
    },
    {
      name: 'Akul',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Office',
      amount: '50000',
    },
    {
      name: 'Rohit',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Home',
      amount: '50000',
    },
    {
      name: 'Ram',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Shop',
      amount: '50000',
    },
    {
      name: 'Rahul',
      txnId: 'dfsdfsf',
      date: 'dfsf',
      dsecription: 'Home',
      amount: '50000',
    },
  ];
}
