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
    this.generateNumbersContinuously();
  }

  generateNumbersContinuously(): void {
    setInterval(() => {
      if (this.numbers.length >= 10) { // Limite la liste des résultats affichée à 10 lignes
        this.numbers.shift(); // Supprime le premier élément si la liste contient déjà 10 nombres
        this.results.shift(); // Supprime également le premier résultat pour garder les listes synchronisées
      }
      const randomNumber = Math.floor(Math.random() * (1000 - (-1000) + 1)) + (-1000);
      this.numbers.push(randomNumber);
      this.applyRule(randomNumber);
    }, 1000); // Génère un nombre toutes les secondes
  }

  applyRule(number: number): void {
    let result;
    if (number % 3 === 0 && number % 5 === 0) {
      result = number.toString() + ' : Gestform';
    } else if (number % 3 === 0) {
      result = number.toString() + ' : Geste';
    } else if (number % 5 === 0) {
      result = number.toString() + ' : Forme';
    } else {
      result = number.toString();
    }
    this.results.push(result);
    console.log(number);
    console.log(this.results);
    console.log(this.numbers.length);
    console.log(this.results.length);
  }
}
