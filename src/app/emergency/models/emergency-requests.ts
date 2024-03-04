import { ColumnConfig } from 'src/app/shared/models/column-config';

export class EmergencyRequests {}
export const emergencyRequestTabCol: ColumnConfig[] = [
  {
    name: 'userName',
    label: 'Requestsed User Name',
  },
  {
    name: 'userContact',
    label: 'User Contact',
  },
  {
    name: 'emergency',
    label: 'Emergency',
  },
  {
    name: 'emergencyType',
    label: 'Emergency Type',
  },
  {
    name: 'address',
    label: 'Address',
  },
  {
    name: 'blockCode',
    label: 'Block Code',
  },
  {
    name: 'date',
    label: 'Request Date & Time	',
  },
];
