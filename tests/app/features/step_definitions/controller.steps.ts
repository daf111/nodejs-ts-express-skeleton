import {BeforeAll, Given, Then} from '@cucumber/cucumber';    
import request from 'supertest';
import { App } from '../../../../src/app/app';

let _request: request.Test;
let application: App;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.app).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _request.expect(status);
});

BeforeAll(async () => {
  application = new App();
  application.start();
});
