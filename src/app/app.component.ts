import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GestformTestComponent} from "./src/app/gestform-test/gestform-test.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GestformTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestform-app';
}
