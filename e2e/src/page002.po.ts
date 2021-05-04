import { browser, by, element, until } from 'protractor';

export class AppPage002 {
  async navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}/page-002`);
  }

  async getTitleText() {
    return await element(by.css('app-page002 h1')).getText();
  }

  getSearchTextFieldValue() {
    return element(by.id('txt-search')).getAttribute('value');
  }

  getResultCount() {
    return element(by.id('txt-result-count')).getText();
  }

  async getResultRowsCount() {
    return element.all(by.css('table tbody tr')).count();
  }

  async isSearchResultTableDisplayed() {
    return element(by.tagName('table')).isPresent();
  }

  searchResultsDisplayed() {
    return until.elementLocated(by.id('cnt-search-results'));
  }

  async setSearchTextFieldValue(searchValue: string) {
    const el = element(by.id('txt-search'));
    el.sendKeys(searchValue);
  }

  async pressSearchButton() {
    return element(by.tagName('button')).click();
  }
}
