import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-gestform-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './gestform-test.component.html',
  styleUrls: ['./gestform-test.component.css']
})
export class GestformTestComponent implements OnInit {
  numbers: number[] = [];
  results: string[] = [];

  ngOnInit(): void {
    this.generateRandomNumbers();
    this.applyRules();
  }

  generateRandomNumbers(): void {
    for (let i = 0; i < 10; i++) { // Générer 10 nombres pour l'exemple
      const randomNumber = Math.floor(Math.random() * (1000 - (-1000) + 1)) + (-1000);
      this.numbers.push(randomNumber);
    }
  }

  applyRules(): void {
    this.numbers.forEach(number => {
      if (number % 3 === 0 && number % 5 === 0) {
        this.results.push('Gestform');
      } else if (number % 3 === 0) {
        this.results.push('Geste');
      } else if (number % 5 === 0) {
        this.results.push('Forme');
      } else {
        this.results.push(number.toString());
      }
      console.log(number);
      console.log(this.results);
    });
  }
}
