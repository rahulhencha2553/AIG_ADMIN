import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {

  @Input() title!:string;
  @Input() message!:string;
  @Output() onDelete = new EventEmitter<any>();
  @Input() id!: number;
  
  ngOnInit(){
    console.log(this.title);
    console.log(this.message);
    console.log(this.id);
  
  }

  deleteData() {
    this.onDelete.emit();
  }
}
