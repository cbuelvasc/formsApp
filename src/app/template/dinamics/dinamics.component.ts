import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Favorite {
  id: number;
  name: string;
}

interface Person {
  name: string;
  favorites: Favorite[];
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.css'],
})
export class DinamicsComponent {
  @ViewChild('myForm') myForm!: NgForm;

  newGame: string = '';

  person: Person = {
    name: 'Carmelo',
    favorites: [
      { id: 1, name: 'Fifa' },
      { id: 2, name: 'Call of duty' },
    ],
  };

  validName(): boolean {
    return (
      this.myForm?.controls?.['name']?.invalid! &&
      this.myForm?.controls?.['name']?.touched!
    );
  }

  save() {
    console.log(this.myForm);
    this.myForm.resetForm();
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  addGame() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame,
    };
    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }
}
