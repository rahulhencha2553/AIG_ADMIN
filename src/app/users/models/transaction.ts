import { ColumnConfig } from 'src/app/shared/models/column-config';

export class Transaction {}
export const transactionTabCol: ColumnConfig[] = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'txnId',
    label: 'Transaction ID	',
  },
  {
    name: 'date',
    label: 'Transaction Date Time	',
  },
  {
    name: 'dsecription',
    label: 'Description of the transaction',
  },
  {
    name: 'amount',
    label: 'Amount',
  },

];
