import { ColumnConfig } from "src/app/shared/models/column-config";

export class Address {
}

export const  addressTableCol :ColumnConfig[] = [
    {
      name: 'addressHolder',
      label: 'Address Holder'
    },
    {
      name: 'aigCode',
      label: 'AIG Code',
    },
    {
      name: 'address',
      label: 'Address'
    },
    {
      name: 'addressType',
      label: 'Address Type',
    },
]