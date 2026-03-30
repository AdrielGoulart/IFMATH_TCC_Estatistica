import { NoThousandDotsPipe } from './no-thousand-dots.pipe';

describe('NoThousandDotsPipe', () => {
  it('create an instance', () => {
    const pipe = new NoThousandDotsPipe();
    expect(pipe).toBeTruthy();
  });
});
