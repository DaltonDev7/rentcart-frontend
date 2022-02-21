import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCurrentUser } from 'src/app/authentication/store';
import * as fromApp from 'src/app/state/app.state';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.scss']
})
export class HomeUsuarioComponent implements OnInit {

  constructor(
    private store: Store<fromApp.State>, 
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(getCurrentUser)).subscribe((data)=>console.log(data));
  }

}
