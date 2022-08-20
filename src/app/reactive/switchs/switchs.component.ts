import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styleUrls: ['./switchs.component.css'],
})
export class SwitchsComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    genre: ['M', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue],
  });

  person = {
    genre: 'F',
    notifications: true,
  };

  terms: boolean = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.myForm.reset({ ...this.person, terms: this.terms });

    this.myForm.valueChanges.subscribe(({ terms, ...rest }) => {
      this.person = rest;
    });
  }

  save(): void {
    const formValue = { ...this.myForm.value };
    delete formValue.terms;
    this.person = formValue;
  }
}
