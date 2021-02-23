import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  APP: {
    App: string,
    Ver: string
  };

  constructor() {
    this.APP = {
      App: "TaskManager",
      Ver: "1.0"
    }
  }
}
