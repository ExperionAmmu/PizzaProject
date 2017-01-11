import { Component, OnInit } from '@angular/core';
// import { AdminPizzaService } from '../admin-pizza.service';
import { LocalStorage } from "angular2-localstorage/WebStorage";   
import { LocalStorageService } from 'angular-2-local-storage';


                        
@Component({
  selector: 'app-add-new-pizza',
  templateUrl: './add-new-pizza.component.html',
  styleUrls: ['./add-new-pizza.component.css'],

})
export class AddNewPizzaComponent implements OnInit {

  uuid = require('node-uuid');
  pizzaObj1;
  pizzaObj2;
  url;
  flag;
  model: any = {};
  pizza = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() { this.flag = 0; }

  add_pizza(model: any): void {


    let id = this.uuid.v4();
    if (this.model.pizzaType == 'veg') {
      this.url = '/home/experion/Pizza-project/Images/veg_pizza.jpg';
    }
    else {
      this.url = '/home/experion/Pizza-project/Images/nonveg_pizza.jpg';
    }
    this.pizzaObj1 = { "id: ": id, "name: ": this.model.pizzaName, "type: ": this.model.pizzaType, "size: ": this.model.pizzaSize, "quantity: ": 0, "price: ": this.model.Price, "url: ": this.url };
    this.pizza.push(this.pizzaObj1);
    this.pizzaObj2 = JSON.stringify(this.pizza);
    this.flag = 1;
    localStorage.setItem("pizza :", this.pizzaObj2);
    if (this.flag === 1) {
      alert("Pizza added");
      this.model.pizzaName = '';
      this.model.pizzaType = '';
      this.model.pizzaSize = '';
      this.model.Price = '';

    }

  }

}