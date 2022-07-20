import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vend-functions',
  templateUrl: './vend-functions.component.html',
  styleUrls: ['./vend-functions.component.scss']
})
export class VendFunctionsComponent implements OnInit {

  constructor() { }

  //used to contral the popups
  public modal : boolean = false;
  //used to contral the item popups
  public showItems : boolean = false;

  //control user input 
  userForm = new FormGroup({

    funds: new FormControl('', Validators.required),

  });

  //error message when a user does an invalid input
  message = "";


  //declare balance and its functions
  balance = 0.00;
  bal = this.balance.toFixed(2);

  //declare items and their info
  items = [
    {
      name: "Chips",
      quantity: 10,
      price: 3.50.toFixed(2)
    },
    {
      name: "Soda",
      quantity: 8,
      price: 2.00.toFixed(2)
    },
    {
      name: "Candy",
      quantity: 5,
      price: 3.00.toFixed(2)
    }
  ];

  //declare revanue
  totalRevanue = 0.00;
  rev = this.totalRevanue.toFixed(2);
  
  //maintain transaction information
  list = [
    {
      name: "Chips",
      quantity: 0,
      price: 3.50.toFixed(2)
    },
    {
      name: "Soda",
      quantity: 0,
      price: 2.00.toFixed(2)
    },
    {
      name: "Candy",
      quantity: 0,
      price: 3.00.toFixed(2)
    }
  ];

  //used to set balance and update
  setBal(balance: number){
    this.balance = balance;
    this.bal = this.balance.toFixed(2);
  }

  //used to add funds by user
  add(){
    let balance = this.balance + this.userForm.value.funds;
    this.setBal(balance);
  }

  //substracts funds when items are bought by user
  sub(item: any){
    if(this.balance >= item.price){
      let balance = this.balance - item.price;
      item.quantity -= 1;
      this.setBal(balance);
      this.setRev(item.price);
    }
    else{
      this.message = "user doesn't have enough funds";
      window.alert(this.message);
    }
  }

  //returns users funds and sets balance to 0
  change(){
    let balance = 0;
    if(this.balance > 0){
      this.message = "Returned funds: $" + this.bal;
      this.setBal(0);
      window.alert(this.message);
    }
    else{
      this.message = "No funds to return";
      window.alert(this.message);
    }
    
    this.setBal(balance);
  }


  //control total revanue value
  setRev(num: number){
    this.totalRevanue = this.totalRevanue + Number(num);
    if(num == 3.50){
      this.list[0].quantity += 1;
    }
    else if(num == 2.00){
      this.list[1].quantity += 1;
    }
    else{
      this.list[2].quantity += 1;
    }

    this.rev = this.totalRevanue.toFixed(2);

  }


  //tries to buy an item. If failed it will show an alert.
  buyItem(item: any){
    if(item.quantity > 0){
      this.sub(item);
    }
    else{
      this.message = "NO " + item.name + " in stock.";
      window.alert(this.message);
    }

  }

  //used to control if pop up form is shown
  active(){
    this.modal = !this.modal;
  }

  //used to control if items are shown
  show(){
    this.showItems = !this.showItems;
  }

  ngOnInit(): void {

  }

}


