import { module, test } from 'qunit';
import { setupTest } from 'frontend-hardware/tests/helpers';

module('Unit | Route | individual-products', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:individual-products');
    assert.ok(route);
  });
});
