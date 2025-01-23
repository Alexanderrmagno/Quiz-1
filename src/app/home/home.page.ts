import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonCheckbox } from '@ionic/angular/standalone';  



interface Event {
 id: number;
 eventName: string;
 startDate: string;
 endDate: string;
 organizerName: string;
 organizerPhone: string;
}

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
 standalone: true,
 imports: [IonicModule, CommonModule, FormsModule]
})

export class HomePage {
 eventName: string = '';
 startDate: string = '';
 endDate: string = '';
 organizerName: string = '';
 organizerPhone: string = '';
  events: Event[] = [];
 today: string = new Date().toISOString();
  showError: boolean = false;
 errorMessage: string = '';

 addEvent() {
   if (this.validateForm()) {
     const newEvent: Event = {
       id: Date.now(),
       eventName: this.eventName,
       startDate: this.startDate,
       endDate: this.endDate,
       organizerName: this.organizerName,
       organizerPhone: this.organizerPhone
     };

     this.events.push(newEvent);
     this.resetForm();
   }
 }

 validateForm(): boolean {
   if (!this.eventName || !this.startDate || !this.endDate ||
       !this.organizerName || !this.organizerPhone) {
     this.showError = true;
     this.errorMessage = 'Por favor, complete todos los campos.';
     return false;
   }

   this.showError = false;
   this.errorMessage = '';
   return true;
 }


 deleteEvent(event: Event) {
   this.events = this.events.filter(e => e.id !== event.id);
 }

 resetForm() {
   this.eventName = '';
   this.startDate = '';
   this.endDate = '';
   this.organizerName = '';
   this.organizerPhone = '';
 }

 onStartDateChange(event: any) {
   this.startDate = event.detail.value;
 }

 onEndDateChange(event: any) {
   this.endDate = event.detail.value;
 }
}
