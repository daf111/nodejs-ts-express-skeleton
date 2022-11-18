const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const app  = [
  ...common,
  'tests/app/features/**/*.feature',
  '--require tests/app/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  app
};
  