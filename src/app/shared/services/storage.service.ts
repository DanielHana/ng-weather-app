import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  savedItems = JSON.parse(localStorage.getItem('cities')) || [];

  constructor() {}

  addToStorage(newItem) {
    if (newItem.length > 0) {
      localStorage.setItem('cities', JSON.stringify(newItem));
    } else {
      localStorage.clear();
    }
  }

  getFromStorage() {
    return JSON.parse(localStorage.getItem('cities'));
  }
}
