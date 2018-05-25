import { OrpyfiPage } from './app.po';

describe('orpyfi App', function() {
  let page: OrpyfiPage;

  beforeEach(() => {
    page = new OrpyfiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
