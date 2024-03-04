import { Component } from '@angular/core';
import { addressVerificationTabCol } from '../../models/address-verification';
import { TableConfig } from 'src/app/shared/models/table-config';

@Component({
  selector: 'app-address-verification-requests',
  templateUrl: './address-verification-requests.component.html',
  styleUrls: ['./address-verification-requests.component.scss']
})
export class AddressVerificationRequestsComponent {

  addressTabCol = addressVerificationTabCol;

  tableConfig: TableConfig = {
    tableHeader: 'Address Verification Requests',
    rowStatus: { label: true },
    withPagination: true,
    isProfileIcon: true,
    profileKey: this.addressTabCol[0].name,
    isDropdown:true,
  };

  data = [
    {
      verificationOfficer	: 'Rahul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
    {
      verificationOfficer: 'Kapil',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Shop',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
    {
      verificationOfficer: 'Akul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Office',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
    {
      verificationOfficer: 'Rohit',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
    {
      verificationOfficer: 'Ram',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Shop',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
    {
      verificationOfficer: 'Rahul',
      aigCode: 'dfsdfsf',
      address: 'dfsf',
      addressType: 'Home',
      addressTypeImage: 'assets/images/svg_img/add-home.svg',
      date: '02/03/2024'
    },
  ];
}
