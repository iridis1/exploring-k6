import http from 'k6/http';
import { sleep, check } from 'k6';

const BASE_URL = 'https://nutrinumwebapi.azurewebsites.net/api';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 1s
  },
  stages: [
    { duration: '3s', target: 3 },
    { duration: '3s', target: 0 },
  ],
};

export function setup() {
  console.log('setup');
}

export default function() {
  let res = http.get(`${BASE_URL}/Nutrient/Fe`);
  check(res, { "NI: status is 200": (res) => res.status === 200 });
  check(res, { "NI: contains IJzer": (res) => res.body.includes("IJzer") });
  sleep(1);
  res = http.get(`${BASE_URL}/Nutrient/D3`);
  check(res, { "NI: status is 200": (res) => res.status === 200 });
  check(res, { "NI: contains Cholecalciferol": (res) => res.body.includes("Cholecalciferol") });
  sleep(1);  
  res = http.get(`${BASE_URL}/Adh/M/51`);
  check(res, { "ADH: status is 200": (res) => res.status === 200 });
  check(res, { "ADH: contains Cholecalciferol": (res) => res.body.includes("Cholecalciferol") });
  check(res, { "ADH: contains IJzer": (res) => res.body.includes("IJzer") });
  sleep(1);  
}

export function teardown() {
  console.log('teardown');
}
