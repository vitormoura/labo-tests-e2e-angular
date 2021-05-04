import { browser, logging } from 'protractor';
import { AppPage001 } from './page001.po';

describe('Page 001', () => {
  let page: AppPage001;

  beforeEach(() => {
    page = new AppPage001();
  });

  it('should display correct initial state', async () => {
    await page.navigateTo();

    expect(await page.getTitleText()).toEqual('Counter (max. 5)');
    expect(await page.getCurrentCount()).toEqual('0');
    expect(await page.getMaxCount()).toEqual('5');
  });

  it('should correctly increment current count', async () => {
    //await page.navigateTo();

    await page.pressIncrementButton();
    expect(await page.getCurrentCount()).toEqual('1');

    await page.pressIncrementButton();
    expect(await page.getCurrentCount()).toEqual('2');
  });

  it('should correctly decrement current count', async () => {
    await page.navigateTo();

    await page.pressIncrementButton();
    expect(await page.getCurrentCount()).toEqual('1');

    await page.pressDecrementButton();
    expect(await page.getCurrentCount()).toEqual('0');
  });

  it('should ignore decrement below minimum value', async () => {
    await page.navigateTo();

    await page.pressDecrementButton();
    expect(await page.getCurrentCount()).toEqual('0');

    await page.pressDecrementButton();
    expect(await page.getCurrentCount()).toEqual('0');
  });

  it('should ignore increment above maximum value', async () => {
    await page.navigateTo();

    const maxCount = parseInt(await page.getMaxCount(), 10);

    for (let c = 0; c < maxCount + 1; c++) {
        await page.pressIncrementButton();            
    }
    
    expect(await page.getCurrentCount()).toEqual(maxCount.toString());
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
