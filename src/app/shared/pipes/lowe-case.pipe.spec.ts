import { LoweCasePipe } from './lowe-case.pipe';

describe('LoweCasePipe', () => {
  it('create an instance', () => {
    const pipe = new LoweCasePipe();
    expect(pipe).toBeTruthy();
  });
});
