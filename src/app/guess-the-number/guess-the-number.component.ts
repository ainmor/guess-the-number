import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-the-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrls: [
    './guess-the-number.component.scss', // Fixed typo: styleUrl -> styleUrls
  ],
})
export class GuessTheNumberComponent {
  public readonly MIN_NUMBER = GuessTheNumberComponent.MIN_NUMBER;
  public readonly MAX_NUMBER = GuessTheNumberComponent.MAX_NUMBER;
  secretNumber: number = this.generateRandomNumber(); // The secret number to guess
  attemptsLeft: number = 5; // Number of attempts left
  guessTheNumber: number = 0; // The user's guess
  feedbackMessage: string = ''; // Feedback message to the user
  gameOver: boolean = false; // Flag to indicate if the game is over

  private static readonly MAX_ATTEMPTS: number = 5; // Maximum number of attempts
  private static readonly MIN_NUMBER: number = 1; // Minimum number for the game
  private static readonly MAX_NUMBER: number = 100; // Maximum number for the game
  private static readonly WIN_MESSAGE: string =
    'Congratulations! You guessed the number!'; // Win message
  private static readonly LOSE_MESSAGE: string =
    'Sorry, you have no attempts left. The number was '; // Lose message
  private static readonly HIGH_MESSAGE: string = 'Your guess is too high!'; // Message for high guess
  private static readonly LOW_MESSAGE: string = 'Your guess is too low!'; // Message for low guess
  private static readonly INVALID_MESSAGE: string =
    'Please enter a valid number between 1 and 100.'; // Invalid input message
  private static readonly INVALID_RANGE_MESSAGE: string = `Please enter a number between ${GuessTheNumberComponent.MIN_NUMBER} and ${GuessTheNumberComponent.MAX_NUMBER}.`; // Invalid range message
  private static readonly INVALID_ATTEMPTS_MESSAGE: string = `You have ${GuessTheNumberComponent.MAX_ATTEMPTS} attempts to guess the number.`; // Invalid attempts message
  private static readonly INVALID_GUESS_MESSAGE: string =
    'Please enter a valid guess.'; // Invalid guess message
  private static readonly INVALID_GUESS_RANGE_MESSAGE: string = `Please enter a number between ${GuessTheNumberComponent.MIN_NUMBER} and ${GuessTheNumberComponent.MAX_NUMBER}.`; // Invalid guess range message
  private static readonly INVALID_GUESS_ATTEMPTS_MESSAGE: string = `You have ${GuessTheNumberComponent.MAX_ATTEMPTS} attempts to guess the number.`; // Invalid guess attempts message
  private static readonly INVALID_GUESS_LOSE_MESSAGE: string = `Sorry, you have no attempts left. The number was `; // Invalid guess lose message
  private static readonly INVALID_GUESS_WIN_MESSAGE: string =
    'Congratulations! You guessed the number!'; // Invalid guess win message
  private static readonly INVALID_GUESS_HIGH_MESSAGE: string =
    'Your guess is too high!'; // Invalid guess high message
  private static readonly INVALID_GUESS_LOW_MESSAGE: string =
    'Your guess is too low!'; // Invalid guess low message

  // Generates a random number between 1 and 100
  private generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessTheNumberComponent.MAX_NUMBER) + 1;
  }

  public isValidGuess(guess: number): boolean {
    return (
      !isNaN(guess) &&
      guess >= GuessTheNumberComponent.MIN_NUMBER &&
      guess <= GuessTheNumberComponent.MAX_NUMBER
    );
  }

  submitGuess(): void {
    if (this.attemptsLeft > 0 && !this.gameOver) {
      if (this.isValidGuess(this.guessTheNumber)) {
        this.attemptsLeft--;
        if (this.guessTheNumber === this.secretNumber) {
          this.feedbackMessage = GuessTheNumberComponent.WIN_MESSAGE;
          this.gameOver = true;
        } else if (this.guessTheNumber > this.secretNumber) {
          this.feedbackMessage = GuessTheNumberComponent.HIGH_MESSAGE;
        } else {
          this.feedbackMessage = GuessTheNumberComponent.LOW_MESSAGE;
        }
      } else {
        this.feedbackMessage = GuessTheNumberComponent.INVALID_MESSAGE;
      }

      if (this.attemptsLeft === 0 && !this.gameOver) {
        this.feedbackMessage =
          GuessTheNumberComponent.LOSE_MESSAGE + this.secretNumber;
        this.gameOver = true;
      }
    }
  }
  resetGame(): void {
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
    this.guessTheNumber = 0;
    this.feedbackMessage = '';
    this.gameOver = false;
  }

  private endGame(): void {
    this.gameOver = true;
    this.feedbackMessage =
      this.guessTheNumber === this.secretNumber
        ? GuessTheNumberComponent.WIN_MESSAGE
        : GuessTheNumberComponent.LOSE_MESSAGE + this.secretNumber;
  }

  get attemptsLeftMessage(): string {
    return this.attemptsLeft > 0
      ? `You have ${this.attemptsLeft} attempts left.`
      : GuessTheNumberComponent.INVALID_ATTEMPTS_MESSAGE;
  }
  get guessTheNumberMessage(): string {
    return this.guessTheNumber > 0
      ? `Your guess is ${this.guessTheNumber}.`
      : GuessTheNumberComponent.INVALID_GUESS_MESSAGE;
  }
  get guessTheNumberRangeMessage(): string {
    return this.guessTheNumber > 0
      ? `Please enter a number between ${GuessTheNumberComponent.MIN_NUMBER} and ${GuessTheNumberComponent.MAX_NUMBER}.`
      : GuessTheNumberComponent.INVALID_GUESS_RANGE_MESSAGE;
  }
  get guessTheNumberAttemptsMessage(): string {
    return this.guessTheNumber > 0
      ? `You have ${GuessTheNumberComponent.MAX_ATTEMPTS} attempts to guess the number.`
      : GuessTheNumberComponent.INVALID_GUESS_ATTEMPTS_MESSAGE;
  }
  get guessTheNumberLoseMessage(): string {
    return this.guessTheNumber > 0
      ? `Sorry, you have no attempts left. The number was ${this.secretNumber}.`
      : GuessTheNumberComponent.INVALID_GUESS_LOSE_MESSAGE;
  }
  get guessTheNumberWinMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_GUESS_WIN_MESSAGE
      : GuessTheNumberComponent.WIN_MESSAGE;
  }
  get guessTheNumberHighMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_GUESS_HIGH_MESSAGE
      : GuessTheNumberComponent.HIGH_MESSAGE;
  }
  get guessTheNumberLowMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_GUESS_LOW_MESSAGE
      : GuessTheNumberComponent.LOW_MESSAGE;
  }
  get guessTheNumberInvalidMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_MESSAGE
      : GuessTheNumberComponent.INVALID_GUESS_MESSAGE;
  }
  get guessTheNumberInvalidRangeMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_RANGE_MESSAGE
      : GuessTheNumberComponent.INVALID_GUESS_RANGE_MESSAGE;
  }
  get guessTheNumberInvalidAttemptsMessage(): string {
    return this.guessTheNumber > 0
      ? GuessTheNumberComponent.INVALID_ATTEMPTS_MESSAGE
      : GuessTheNumberComponent.INVALID_GUESS_ATTEMPTS_MESSAGE;
  }
}
