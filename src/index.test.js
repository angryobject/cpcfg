jest.mock('fs');

const cpcfg = require('./index');
const files = require('./files');
const fs = require('fs');

const stream = { pipe: jest.fn() };
const readStream = jest.fn(() => stream);
const writeStream = jest.fn(() => stream);

fs.createReadStream = readStream;
fs.createWriteStream = writeStream;

beforeEach(() => {
  jest.clearAllMocks();
});

Object.keys(files).forEach(key => {
  test(key, () => {
    cpcfg(__dirname, key);

    Object.keys(files[key]).forEach((source, i) => {
      const dest = files[key][source];

      expect(readStream.mock.calls[i][0]).toBe(__dirname + `/files/${source}`);
      expect(writeStream.mock.calls[i][0]).toBe(__dirname + `/${dest}`);
    });

    expect(stream.pipe.mock.calls.length).toBe(Object.keys(files[key]).length);
  });
})
