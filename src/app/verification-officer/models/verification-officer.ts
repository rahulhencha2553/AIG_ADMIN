import { ColumnConfig } from 'src/app/shared/models/column-config';

export class VerificationOfficer {}

export const verificationOfficerTabCol: ColumnConfig[] = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'email',
    label: 'Email address',
  },
  {
    name: 'phoneNumber',
    label: 'Phone number',
  },
  {
    name: 'lgaCode',
    label: 'LGA Code',
  },
  {
    name: 'address',
    label: 'Address',
  },

];
