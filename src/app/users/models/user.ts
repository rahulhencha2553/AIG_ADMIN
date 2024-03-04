import { ColumnConfig } from "src/app/shared/models/column-config";

export class User {}

export const  userTableCol :ColumnConfig[] = [
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'email',
      label: 'Email address'
    },
    {
      name: 'phoneNumber',
      label: 'Phone number',
    },
    {
      name: 'date',
      label: 'Last update date',
      type: 'Date'
    },
]



