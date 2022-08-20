import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css'],
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  initForm = {
    product: 'card',
    price: 10,
    stock: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  validProduct(): boolean {
    return (
      this.myForm?.controls?.['product']?.invalid! &&
      this.myForm?.controls?.['product']?.touched!
    );
  }

  validPrice(): boolean {
    return (
      this.myForm?.controls?.['price']?.invalid! &&
      this.myForm?.controls?.['price']?.touched!
    );
  }

  save() {
    console.log(this.myForm);
    this.myForm.resetForm();
  }
}
