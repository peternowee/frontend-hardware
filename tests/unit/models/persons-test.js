import { module, test } from 'qunit';

import { setupTest } from 'hw-ember/tests/helpers';

module('Unit | Model | persons', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('persons', {});
    assert.ok(model);
  });
});
