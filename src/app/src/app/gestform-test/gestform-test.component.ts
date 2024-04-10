import {Component, OnInit} from '@angular/core';
import {Observable, interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-gestform-test',
  standalone: true,
  templateUrl: './gestform-test.component.html',
  styleUrls: ['./gestform-test.component.css']
})
export class GestformTestComponent implements OnInit {
  currentNumber?: number;
  currentResult?: string;

  ngOnInit(): void {
    this.generateNumbersContinuously().subscribe((result: string) => {
      this.currentResult = result;
    });
  }

  generateNumbersContinuously(): Observable<string> {
    return interval(1000).pipe(
      map(() => {
        this.currentNumber = Math.floor(Math.random() * (2001)) - 1000;
        return this.applyRule(this.currentNumber);
      })
    );
  }

  applyRule(number: number): string {
    if (number % 3 === 0 && number % 5 === 0) {
      return `${number} : Gestform`;
    } else if (number % 3 === 0) {
      return `${number} : Geste`;
    } else if (number % 5 === 0) {
      return `${number} : Forme`;
    } else {
      return number.toString();
    }
  }
}
