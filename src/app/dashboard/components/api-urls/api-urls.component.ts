import { Component } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/models/column-config';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-api-urls',
  templateUrl: './api-urls.component.html',
  styleUrls: ['./api-urls.component.scss']
})
export class ApiUrlsComponent {
  apiUrlCol: ColumnConfig[] = [
    {
      name: 'apiUrl',
      label: 'API URL	',
    },
    {
      name: 'hits',
      label: 'Total no of Hits',
    },
  ];

  tableConfig: TableConfig = {
    tableHeader: 'API',
    withPagination: false,
    scroll:{isScroll:true,class:'api_scroll'}
  };

  data = [
    { apiUrl: 'Rahul', hits: 'dfsdfsf' },
    { apiUrl: 'Kapil', hits: 'dfsdfsf' },
    { apiUrl: 'Akul', hits: 'dfsdfsf' },
    { apiUrl: 'Rohit', hits: 'dfsdfsf' },
    { apiUrl: 'Ram', hits: 'dfsdfsf' },
    { apiUrl: 'Rahul', hits: 'dfsdfsf' },
    { apiUrl: 'Rahul', hits: 'dfsdfsf' },
    { apiUrl: 'Kapil', hits: 'dfsdfsf' },
    { apiUrl: 'Akul', hits: 'dfsdfsf' },
    { apiUrl: 'Rohit', hits: 'dfsdfsf' },
    { apiUrl: 'Ram', hits: 'dfsdfsf' },
    { apiUrl: 'Rahul', hits: 'dfsdfsf' },
  ];
}
