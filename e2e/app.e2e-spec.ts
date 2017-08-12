import { FinancialsAppPage } from './app.po';

describe('financials-app App', () => {
  let page: FinancialsAppPage;

  beforeEach(() => {
    page = new FinancialsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
