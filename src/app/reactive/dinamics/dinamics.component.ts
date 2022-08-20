import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css'],
})
export class DinamicsComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array(
      [
        this.formBuilder.control('Metal Gear', Validators.required),
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  public get favorites(): FormArray {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  isFieldValid(field: string): boolean {
    return (
      this.myForm.controls?.[field].invalid &&
      this.myForm.controls?.[field].touched
    );
  }

  addFavorite(): void {
    if (this.newFavorite.invalid) {
      return;
    }
    this.favorites.push(
      this.formBuilder.control(this.newFavorite.value, Validators.required)
    );
    this.newFavorite.reset();
  }

  delete(index: number): void {
    this.favorites.removeAt(index);
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
