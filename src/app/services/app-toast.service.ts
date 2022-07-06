import { Injectable } from '@angular/core';
import { ToastInfo } from '../Models/infrastructure/toastInfo';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {
  toasts: ToastInfo[] = [];
  
  // show(header: string, body: string) {
  //   this.toasts.push({ header, body });
  // }

  show(textOrTpl: string , options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }
  showSuccess( txt :string){
    this.toasts.push(
      { header : "",
        body : txt,
        classname : 'bg-success text-light',
        delay : 2000
    })
    console.log( this.toasts);
  }

  showError(txt :string) {
    this.toasts.push(
      { header : "",
        body : txt,
        classname : 'bg-danger text-light',
        delay : 3000
    })
  }

  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
constructor() { }
}
