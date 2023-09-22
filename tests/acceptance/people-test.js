import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'frontend-hardware/tests/helpers';

module('Acceptance | people', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /people', async function (assert) {
    await visit('/people');

    assert.strictEqual(currentURL(), '/people');
  });
});
