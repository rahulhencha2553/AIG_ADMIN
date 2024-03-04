import { Component, EventEmitter, Output } from '@angular/core';
import { Constants } from '../../utils/constants';
import { ComponentsRoutes } from '../../utils/components-routes';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers : [Constants,ComponentsRoutes]
})
export class SideBarComponent {

  @Output() setTitleName = new EventEmitter();

  constants = Constants;
  componentRoutes = ComponentsRoutes;

  public getTitleName(titleName:string){
    this.setTitleName.emit(titleName);
  }
}
