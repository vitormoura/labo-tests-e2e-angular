import { browser, by, element } from 'protractor';

export class AppPage001 {
  async navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/page-001`);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-page001 h1')).getText();
  }

  getCurrentCount() {
    return element(by.css('app-page001 .txt-result')).getText();
  }

  getMaxCount() {
    return element(by.css('app-page001 .txt-max-count')).getText();
  }

  pressIncrementButton() {
    return element(by.id('btn-increment')).click();
  }

  pressDecrementButton() {
    return element(by.id('btn-decrement')).click();
  }
}
