// tslint:disable-next-line: quotemark
import { KatexOptions } from "ng-katex";
// tslint:disable-next-line: quotemark
import { Component } from "@angular/core";


@Component({
  templateUrl: './pln-description.component.html'
})

// tslint:disable-next-line: class-name
export class PlnDescriptionComponent {
  public equationOne: string [] = [];
  public equationTwo: string [] = [];
  public equationThree: string [] = [];
  public equationFour: string [] = [];
  public isVisibleEquationOne = false;
  public isVisibleEquationTwo = false;
  public isVisibleEquationThree = false;
  public isVisibleEquationFour = false;


  public options: KatexOptions = {
    displayMode: true,
  };

  constructor() {
    this.createFirstEquation();
    this.createSecondEquation();
    this.createThirdEquation();
    this.createFourthEquation();
   }


  private createFirstEquation(): void {
    this.equationOne.push('p(x) = 2x^2 + 5x -2');
    this.equationOne.push('p(2) = 2 * 2^2 + 5 * 2 - 2');
    this.equationOne.push('p(2) = 2 * 4 + 5 * 2 - 2');
    this.equationOne.push('p(2) = 8 + 10 - 2');
    this.equationOne.push('p(2) = 16');
  }

   private createSecondEquation(): void {
     this.equationTwo.push('p =  3x^2 - 2x + 9 + 4x^2 + 4x');
     this.equationTwo.push('p =  (3x^2 - 2x) + (9 + 4x^2 + 4x)');
     this.equationTwo.push('p =  3x^2 - 2x + 9 + 4x^2 + 4x');
     this.equationTwo.push('p =  3x^2 + 4x^2 - 2x + 4x + 9');
     this.equationTwo.push('p =  7x^2 + 2x + 9');
    }

    private createThirdEquation(): void {
      this.equationThree.push('p =  6y^5 - 5y + 4 - 2y^5 - 8y + 4');
      this.equationThree.push('p =  (6y^5 - 5y + 4) - (2y^5 - 8y + 4)');
      this.equationThree.push('p =  6y^5 - 5y + 4 - 2y^5 + 8y - 4');
      this.equationThree.push('p =  6y^5 - 2y^5 - 5y + 8y + 4 - 4');
      this.equationThree.push('p =  4y^5 + 3y');
     }

     private createFourthEquation(): void {
      this.equationFour.push('p =  x^2 - 25 * 3 - x');
      this.equationFour.push('p =  (x^2 - 25) * (3 - x)');
      this.equationFour.push('p =  x^2 * 3 + x^2 * (-x) + (-25) * 3 + (-25) * (-x)');
      this.equationFour.push('p =  3x^2 - x^3 - 75 + 25x');
      this.equationFour.push('p =  -x^3 + 3x^2 + 25x - 75');
     }

  public getArrayItem(array: string [], index: number): string {
    return array[index];
  }
}
