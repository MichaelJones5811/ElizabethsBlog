import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('elizabeths-blog App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
