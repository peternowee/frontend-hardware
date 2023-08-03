import { module, test } from 'qunit';
import { setupTest } from 'frontend-hardware/tests/helpers';

module('Unit | Route | count', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:count');
    assert.ok(route);
  });
});
