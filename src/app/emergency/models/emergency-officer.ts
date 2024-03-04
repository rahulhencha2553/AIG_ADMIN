import { ColumnConfig } from 'src/app/shared/models/column-config';

export class EmergencyOfficer {}

export const emergencyOfficerTabCol: ColumnConfig[] = [
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
    name: 'emergencyType',
    label: 'Emergency Type',
  },
  {
    name: 'password',
    label: 'Password',
  },
];
