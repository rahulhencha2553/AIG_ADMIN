import { ColumnConfig } from "src/app/shared/models/column-config";

export class AddressVerification {
}

export const addressVerificationTabCol : ColumnConfig [] = [
      {
        name: 'verificationOfficer',
        label: 'Assigned Verification Officer'
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
      {
        name: 'date',
        label: 'Transaction Date & Time',
      },
]
