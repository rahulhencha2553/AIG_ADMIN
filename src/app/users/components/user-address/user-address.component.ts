import { Component } from '@angular/core';
import { TableConfig } from 'src/app/shared/models/table-config';
import { addressTableCol } from '../../models/address';
import { ModalConfig } from 'src/app/shared/models/modal-config';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss'],
})
export class UserAddressComponent {
  addressTabCol = addressTableCol;

  tableConfig: TableConfig = {
    tableHeader: 'Address',
    isAdd: false,
    rowActions: { edit: true, delete: true, view: true },
    rowStatus: { label: true },
    isDropdown: true,
    isProfileIcon: true,
    profileKey: this.addressTabCol[0].name,
    isAddressTypeIcon: true,
    addressIconKey: 'addressTypeImage',
    dropdownData: [],
  };
  modalConfig: ModalConfig = {
    title: 'delete modal ',
    message: 'are you sure want to delet this',
  };

  data = [
    {
      addressHolder: 'Rahul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
    {
      addressHolder: 'Kapil',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Shop',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
    {
      addressHolder: 'Akul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Office',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
    {
      addressHolder: 'Rohit',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
    {
      addressHolder: 'Ram',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Shop',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
    {
      addressHolder: 'Rahul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
    },
  ];
}
