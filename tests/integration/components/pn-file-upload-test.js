import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-hardware/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pn-file-upload', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PnFileUpload />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PnFileUpload>
        template block text
      </PnFileUpload>
    `);

    assert.dom().hasText('template block text');
  });
});
