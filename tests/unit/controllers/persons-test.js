import { module, test } from 'qunit';
import { setupTest } from 'hw-ember/tests/helpers';

module('Unit | Controller | persons', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:persons');
    assert.ok(controller);
  });
});
