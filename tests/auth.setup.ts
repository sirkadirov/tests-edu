import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/');
    await page.waitForURL('https://pre-release.unisched.pages.dev/Welcome');

    await page.waitForLoadState('domcontentloaded');

    const config : string = '{"IsInitialized":true,"InstitutionId":1000,"InstitutionTitle"' +
        ':"\u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u0438\u0439 ' +
        '\u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0439 ' +
        '\u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 ' +
        '\u0456\u043C\u0435\u043D\u0456 \u0406\u0432\u0430\u043D\u0430 ' +
        '\u0424\u0440\u0430\u043D\u043A\u0430","CityLat":"49.842957","CityLon":"24.031111",' +
        '"DepartmentName":"\u0424\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442 ' +
        '\u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0456\u043A\u0438 \u0442\u0430 ' +
        '\u043A\u043E\u043C\u043F\u2018\u044E\u0442\u0435\u0440\u043D\u0438\u0445 ' +
        '\u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0439","EntityType":1,' +
        '"EntityName":"\u0424\u0415\u0406\u041C-14\u0441","IgnoredSubgroups":[],' +
        '"DisableWeatherForecast":false}';
    await page.evaluate(config => localStorage.setItem('UserAppConfiguration-v1', config), config);

    const scheduleView: string = '3';
    await page.evaluate(scheduleView => localStorage.setItem('_selectedView', scheduleView), scheduleView);

    await page.goto('https://pre-release.unisched.pages.dev/');
    await page.context().storageState({ path: authFile });
});
