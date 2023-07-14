import { module, test } from 'qunit';
import { setupTest } from 'frontend-hardware/tests/helpers';

module('Unit | Controller | individual-products', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:individual-products');
    assert.ok(controller);
  });
});
