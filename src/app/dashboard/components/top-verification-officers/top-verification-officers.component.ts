import { Component } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/models/column-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-top-verification-officers',
  templateUrl: './top-verification-officers.component.html',
  styleUrls: ['./top-verification-officers.component.scss'],
})
export class TopVerificationOfficersComponent {
  officerCol: ColumnConfig[] = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'aigCode',
      label: 'AIG Code',
    },
  ];

  tableConfig: TableConfig = {
    tableHeader: 'Top Verification Officer',
    isProfileIcon: true,
    withPagination: false,
    profileKey:this.officerCol[0].name,
    scroll:{isScroll:true,class:'top_officer_scroll'}
  };

  data = [
    { name: 'Rahul', aigCode: 'dfsdfsf' },
    { name: 'Kapil', aigCode: 'dfsdfsf' },
    { name: 'Akul', aigCode: 'dfsdfsf' },
    { name: 'Rohit', aigCode: 'dfsdfsf' },
    { name: 'Ram', aigCode: 'dfsdfsf' },
    { name: 'Rahul', aigCode: 'dfsdfsf' },
    { name: 'Rahul', aigCode: 'dfsdfsf' },
    { name: 'Kapil', aigCode: 'dfsdfsf' },
    { name: 'Akul', aigCode: 'dfsdfsf' },
    { name: 'Rohit', aigCode: 'dfsdfsf' },
    { name: 'Ram', aigCode: 'dfsdfsf' },
    { name: 'Rahul', aigCode: 'dfsdfsf' },
  ];
}
