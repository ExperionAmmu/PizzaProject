import { PizzaAppPage } from './app.po';

describe('pizza-app App', function() {
  let page: PizzaAppPage;

  beforeEach(() => {
    page = new PizzaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
