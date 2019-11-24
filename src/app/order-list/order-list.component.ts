import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../shared/orders.service";



@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {this.getCoffeeOrders();}

  coffeeOrders;  

  getCoffeeOrders = () => 
    this.ordersService
    .getCoffeeOrders()
    .subscribe(res =>(this.coffeeOrders = res));



/*    
  updateCoffeeOrder(data) {
      return this.firestore.collection("coffeeOrders").doc(data.payload.doc.id).set({ completed: true }, { merge: true });
  }
*/
  markCompleted = data => this.ordersService.updateCoffeeOrder(data); 

  updateCoffeeOrder(data) {
    return this.firebase.collection("coffeeOrders").doc(data.payload.doc.id).set({ completed: true}, { merge: true });
  }
    
  }
