jest.mock('./index');
jest.mock('process');

const cpcfg = require('./index');

process.cwd = () => __dirname;
process.argv = ['node', 'cli.js', 'git', 'editor'];

test('cli passes correct arguments', () => {
  require('./cli');
  expect(cpcfg.mock.calls[0][0]).toBe(__dirname);
  expect(cpcfg.mock.calls[0][1]).toBe('git');
  expect(cpcfg.mock.calls[0][2]).toBe('editor');
})

