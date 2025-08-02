// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<50'], // 95% of requests should be below specified time
  },
  stages: [
    { duration: '3s', target: 3 },
    { duration: '3s', target: 0 },
  ],
};

export default function main() {
  let response

  group('ADH Keuze', function () {
    response = http.get('https://nutrinum.azurewebsites.net/Adh/Keuze', {
      headers: {
        DNT: '1',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/css/bundled.min.css', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/js/bundled.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
  })

  sleep(2)

  group('Man 19 jaar', function () {
    response = http.get('https://nutrinum.azurewebsites.net/Adh/Index/m/19', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'nl,en-US;q=0.9,en;q=0.8',
        dnt: '1',
        priority: 'u=0, i',
        referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/css/bundled.min.css', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Index/m/19',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/js/bundled.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Index/m/19',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
  })

    sleep(2)

  group('Nutrienten', function () {
    response = http.get('https://nutrinum.azurewebsites.net/Nutrient/Index', {
      headers: {
        DNT: '1',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Index/m/19',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/css/bundled.min.css', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Nutrient/Index',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/js/bundled.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Nutrient/Index',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
  })

  sleep(2)

  group('ADH Keuzee', function () {
    response = http.get('https://nutrinum.azurewebsites.net/Adh/Keuze', {
      headers: {
        DNT: '1',
        Referer: 'https://nutrinum.azurewebsites.net/Nutrient/Index',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/css/bundled.min.css', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
    response = http.get('https://nutrinum.azurewebsites.net/js/bundled.min.js', {
      headers: {
        'sec-ch-ua-platform': '"Windows"',
        Referer: 'https://nutrinum.azurewebsites.net/Adh/Keuze',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        DNT: '1',
        'sec-ch-ua-mobile': '?0',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
