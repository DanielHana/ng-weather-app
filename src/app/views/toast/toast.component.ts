import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})

export class ToastComponent implements OnInit, OnDestroy {

  public subscription = new Subscription();

  constructor(private toastService: ToastService, private messageService: MessageService) { }
  public ngOnInit() {
    this.subscription.add(this.toastService.displayMessage$.subscribe(msg => {
      if (msg) {
        this.showMessage(msg);
      }
    }));
  }

  public showMessage(message) {
    this.messageService.add({
      severity: this.toastService.severity,
      summary: this.toastService.title, detail: message,
      life: this.toastService.life
    });
  }

  public ngOnDestroy() { if (this.subscription) { this.subscription.unsubscribe(); } }
}
