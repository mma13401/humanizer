const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const haikus = require('../haikus.json');

test('haikus.json contains at least one haiku', () => {
  assert.ok(Array.isArray(haikus) && haikus.length > 0);
});

test('every haiku has 3 lines of text and an existing image', () => {
  haikus.forEach((h, i) => {
    assert.strictEqual(typeof h.text, 'string', `haiku #${i}: text must be a string`);
    assert.strictEqual(h.text.split('\n').length, 3, `haiku #${i}: must have 3 lines`);
    assert.ok(
      fs.existsSync(path.join(__dirname, '..', 'public', 'images', h.image)),
      `haiku #${i}: missing image public/images/${h.image}`
    );
  });
});
