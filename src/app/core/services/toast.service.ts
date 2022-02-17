import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) { }


  public getMessagePassWordError(): void {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Las contraseñas no coinciden' });
  }

}
