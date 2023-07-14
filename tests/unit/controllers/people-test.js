import { module, test } from 'qunit';
import { setupTest } from 'hw-ember/tests/helpers';

module('Unit | Controller | people', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:people');
    assert.ok(controller);
  });
});
