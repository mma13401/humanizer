const { test } = require('node:test');
const assert = require('node:assert');
const app = require('../app');
const haikus = require('../haikus.json');

test('GET / renders every haiku', async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());
  const res = await fetch(`http://127.0.0.1:${server.address().port}/`);
  assert.strictEqual(res.status, 200);
  const html = await res.text();
  assert.ok(html.includes('Haikus for Mona'));
  assert.strictEqual(html.split('class="haikus"').length - 1, haikus.length);
});

test('GET /unknown returns 404', async (t) => {
  const server = app.listen(0);
  t.after(() => server.close());
  const res = await fetch(`http://127.0.0.1:${server.address().port}/nope`);
  assert.strictEqual(res.status, 404);
});
