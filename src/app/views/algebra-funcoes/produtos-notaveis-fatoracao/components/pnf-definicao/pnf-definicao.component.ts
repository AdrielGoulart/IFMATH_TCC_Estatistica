import { KatexOptions } from "ng-katex";

import { Component} from '@angular/core';

@Component({
  templateUrl: './pnf-definicao.component.html',
  styleUrls: ['./pnf-definicao.component.scss']
})
export class PnfDefinicaoComponent {

  public equationOne: string [] = [];
  public equationTwo: string [] = [];
  public equationThree: string [] = [];
  public equationFour: string [] = [];
  public equationFive: string [] = [];
  public equationSix: string [] = [];
  public equationSeven: string [] = [];
  public equationEight: string [] = [];
  public equationNine: string [] = [];
  public equationTen: string [] = [];
  public equationEleven: string [] = [];
  public equationTwelve: string [] = [];
  public isVisibleEquationOne = false;
  public isVisibleEquationTwo = false;
  public isVisibleEquationThree = false;
  public isVisibleEquationFour = false;
  public isVisibleEquationFive = false;
  public isVisibleEquationSix = false;
  public isVisibleEquationSeven = false;
  public isVisibleEquationEight = false;
  public isVisibleEquationNine = false;
  public isVisibleEquationTen = false;
  public isVisibleEquationEleven = false;
  public isVisibleEquationTwelve = false;



  public options: KatexOptions = {
    displayMode: true,
  };

  constructor() {
    this.createFirstEquation();
    this.createSecondEquation();
    this.createThirdEquation();
    this.createFourthEquation();
    this.createFifthEquation();
    this.createSixthEquation();
    this.createSeventhEquation();
    this.createEighthEquation();
    this.createNinthEquation();
    this.createTenthEquation();
    this.createEleventhEquation();
    this.createTwelfthEquation();
   }


  private createFirstEquation(): void {
    this.equationOne.push('p =  (3 + x)^2');
    this.equationOne.push('p =  (3)^2 + 2 * 3 * x + (x)^2');
    this.equationOne.push('p =  9 + 2 * 3 * x + x^2');
    this.equationOne.push('p =  9 + 6x + x^2');
    this.equationOne.push('p =  x^2 + 6x + 9');
  }

   private createSecondEquation(): void {
    this.equationTwo.push('p =  (x^2 - 5)^2');
    this.equationTwo.push('p =  (x^2)^2 - 2 * x^2 * 5 + (5)^2');
    this.equationTwo.push('p =  x^4 - 2 * x^2 * 5 + 25');
    this.equationTwo.push('p =  x^4 - 10x^2 + 25');
    }

    private createThirdEquation(): void {
      this.equationThree.push('p =  (5 + a) * (5 - a)');
      this.equationThree.push('p =  (5)^2 - (a)^2');
      this.equationThree.push('p =  25 - a^2');
      this.equationThree.push('p =  -a^2 + 25');
     }

     private createFourthEquation(): void {
      this.equationFour.push('p =  (y^2 + 9)^2');
      this.equationFour.push('p =  (y^2)^3 + 3 * (y^2)^2 * 9 + 3 * y^2 * (9)^2 + (9)^3');
      this.equationFour.push('p =  y^6 + 3 * y^4 * 9 + 3 * y^2 * 81 + 729');
      this.equationFour.push('p =  y^6 + 27y^4 + 243y^2 + 729');
     }

     private createFifthEquation(): void {
      this.equationFive.push('p =  (4 - z)^2');
      this.equationFive.push('p =  (4)^3 - 3 * (4)^2 * z + 3 * 4 * (z)^2 - (z)^3');
      this.equationFive.push('p =  64 - 3 * 16 * z + 3 * 4 * z^2 - z^3');
      this.equationFive.push('p =  64 - 48z + 12z^2 - z^3');
      this.equationFive.push('p =  -z^3 + 12z^2 - 48z + 64');
     }

     private createSixthEquation(): void {
      this.equationSix.push('p =  12 + 2x - 4x^5');
      this.equationSix.push('p =  2 * (6 + x - 2x^5)');
     }

     private createSeventhEquation(): void {
      this.equationSeven.push('p =  x^3 + 2x^2 - x + 2x^2 + 4x - 2');
      this.equationSeven.push('p =  x * (x^2 + 2x - 1) + 2 * (x^2 + 2x - 1)');
      this.equationSeven.push('p =  (x + 2) * (x^2 + 2x - 1)');
     }

     private createEighthEquation(): void {
      this.equationEight.push('p =  36 + 12x + x^2');
      this.equationEight.push('p =  (6)^2 + 2 * 6 * x + (x)^2');
      this.equationEight.push('p =  (6 + x)^2');
     }

     private createNinthEquation(): void {
      this.equationNine.push('p =  16 - x^4');
      this.equationNine.push('p =  (4)^2 - (x^2)^2');
      this.equationNine.push('p =  (4 + x) * (4 - x)');
     }
     
     private createTenthEquation(): void {
      this.equationTen.push('p =  j^3 + 9j^2 + 27j + 27');
      this.equationTen.push('p =  (j) ^ 3 + 3 * (j)^2 * 3 + 3 * j * (3)^2 + (3) ^ 3');
      this.equationTen.push('p =  (j + 3) ^ 3');
     }
     
     private createEleventhEquation(): void {
      this.equationEleven.push('p =  27x^3 - 54x^2 + 36x - 8');
      this.equationEleven.push('p =  (3x) ^ 3 - 3 * (3x)^2 * 2 + 3 * 3x * (2)^2 - (2) ^ 3');
      this.equationEleven.push('p =  (3x - 2) ^ 3');
     }

     private createTwelfthEquation(): void {
      this.equationTwelve.push('p =  10 - 9x + 2x^2');
      this.equationTwelve.push('p =  x^2 + (-9/2)x + (10/2)');
      this.equationTwelve.push('p =  2 * (x - 5/2) * (x - 2)');
     }

  public getArrayItem(array: string [], index: number): string {
    return array[index];
  }
}