import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(title: any, message: any) {
    this.toastrService.success(message, title);
  }

  showError(title: any, message: any) {
    this.toastrService.error(message, title);
  }

  showWarning(title: any, message: any) {
    this.toastrService.warning(message, title);
  }

  showInfo(title: any, message: any) {
    this.toastrService.info(message, title);
  }
}
