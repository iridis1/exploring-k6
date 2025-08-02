// Creator: WebInspector 537.36

import http from 'k6/http';
import exec from 'k6/execution';
import { browser } from 'k6/browser';
import { sleep, check, fail } from 'k6';

const BASE_URL = 'https://nutrinum.azurewebsites.net/';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<50'], // 95% of requests should be below specified time
  },
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 2,
      iterations: 3,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};


export default async function main() {
  let checkData;
  const page = await browser.newPage();

  await page.goto(BASE_URL);

  checkData = await page.locator('h1').textContent();
  check(page, {
    "Titel is correct": checkData == 'Aanbevolen dagelijkse hoeveelheid'
  });
  await page.locator('a.adh-cat-knop').first().click();
  await page.screenshot({ path: 'screenshot.png' });

  checkData = await page.locator('div.adh-cat-tekst').innerText();
  
  console.log('**********************');
  console.log(checkData);
  check(page, {
    "Geselecteerde categorie": checkData == 'VROUW 19-50 JAAR'
  });
  sleep(1);
}

