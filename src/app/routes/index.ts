import { Router } from 'express';
import fs from 'fs';

export function registerRoutes(router: Router) {
  const routes = fs.readdirSync(__dirname).filter(fn => fn.endsWith('.route.ts') || fn.endsWith('.route.js'));
  routes.map(route => register(__dirname + '/' + route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}