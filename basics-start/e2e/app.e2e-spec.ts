import { UpgradedChainsawPage } from './app.po';

describe('upgraded-chainsaw App', () => {
  let page: UpgradedChainsawPage;

  beforeEach(() => {
    page = new UpgradedChainsawPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
