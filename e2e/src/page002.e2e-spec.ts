import { browser, logging } from 'protractor';
import { AppPage002 } from './page002.po';

describe('Page 002', () => {
  let page: AppPage002;

  beforeEach(() => {
    page = new AppPage002();
  });

  it('should display correct initial state', async () => {
    await page.navigateTo();

    expect(await page.getTitleText()).toEqual('Http Requests');
    expect(await page.getSearchTextFieldValue()).toBe('');
    expect(await page.isSearchResultTableDisplayed()).toBeFalsy();
  });

  it('should display search results', async (done) => {
    await page.navigateTo();

    await page.setSearchTextFieldValue('brazil');
    await page.pressSearchButton();

    browser
      .wait(page.searchResultsDisplayed(), 10000)
      .then(async () => {
        const resultCount = await page.getResultCount();

        expect(resultCount).toBeTruthy();
        expect(await page.getResultRowsCount()).toBe(parseFloat(resultCount));
      })
      .then(done);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
