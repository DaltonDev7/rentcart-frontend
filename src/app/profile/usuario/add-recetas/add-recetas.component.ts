import { Component, OnInit } from '@angular/core';
import { AddRecetasManagerService } from './add-recetas-manager.service';

@Component({
  selector: 'app-add-recetas',
  templateUrl: './add-recetas.component.html',
  styleUrls: ['./add-recetas.component.scss']
})
export class AddRecetasComponent implements OnInit {

  constructor(
    public addRecetasManagerServices : AddRecetasManagerService
  ) { }

  ngOnInit(): void {
    this.addRecetasManagerServices.setForms();
  }

  onSave(){
    this.addRecetasManagerServices.save()
  }

}
