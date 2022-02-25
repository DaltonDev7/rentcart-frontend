import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/core/services/form.service';
import { AddRecetasManagerService } from './add-recetas-manager.service';

@Component({
  selector: 'app-add-recetas',
  templateUrl: './add-recetas.component.html',
  styleUrls: ['./add-recetas.component.scss']
})
export class AddRecetasComponent implements OnInit {

  constructor(
    public formService: FormService,
    public addRecetasManagerServices: AddRecetasManagerService
  ) { }

  ngOnInit(): void {
    this.addRecetasManagerServices.setForms();
  }

  onSave() {
    this.addRecetasManagerServices.save()
  }

}
