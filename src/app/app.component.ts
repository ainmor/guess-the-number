import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessTheNumberComponent } from './guess-the-number/guess-the-number.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, GuessTheNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'guess-the-number';
}
