import { describe, test } from 'node:test';
import { strict as assert } from 'node:assert';
import { casinoSlugFromHref, clickSourcePath } from './casino-clicks';

describe('casino click attribution', () => {
  test('attributes the Winhero casino button, not its review link', () => {
    assert.equal(casinoSlugFromHref('/go/winhero', 'https://buitenlandsecasino.com'), 'winhero');
    assert.equal(casinoSlugFromHref('/review/winhero', 'https://buitenlandsecasino.com'), null);
  });
  test('rejects unknown casinos and other website origins', () => {
    assert.equal(casinoSlugFromHref('/go/not-a-casino', 'https://buitenlandsecasino.com'), null);
    assert.equal(casinoSlugFromHref('https://example.com/go/winhero', 'https://buitenlandsecasino.com'), null);
  });
  test('retains the source page with a bounded size', () => {
    assert.equal(clickSourcePath('/snelle-uitbetaling-ideal-casinos'), '/snelle-uitbetaling-ideal-casinos');
    assert.equal(clickSourcePath('/' + 'a'.repeat(300)).length, 250);
    assert.equal(clickSourcePath('invalid'), '/');
  });
});