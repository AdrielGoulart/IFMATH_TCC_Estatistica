export class IPolynomialNumericValue{
  expression: string;
  inputs: NumericValue[] = [];
}

export class NumericValue {
  literal: string;
  coefficient: number;
}
