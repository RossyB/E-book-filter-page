import { EBookFilterPagePage } from './app.po';

describe('e-book-filter-page App', () => {
  let page: EBookFilterPagePage;

  beforeEach(() => {
    page = new EBookFilterPagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
