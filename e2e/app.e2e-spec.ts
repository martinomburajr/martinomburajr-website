import { ProsopikosIstosPage } from './app.po';

describe('prosopikos-istos App', () => {
  let page: ProsopikosIstosPage;

  beforeEach(() => {
    page = new ProsopikosIstosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
