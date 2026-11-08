import { describe, expect, test } from 'bun:test';
import { casinoSlugFromHref, clickSourcePath } from './casino-clicks';

describe('casino click attribution', () => {
  test('attributes the Winhero casino button, not its review link', () => {
    expect(casinoSlugFromHref('/go/winhero', 'https://buitenlandsecasino.com')).toBe('winhero');
    expect(casinoSlugFromHref('/review/winhero', 'https://buitenlandsecasino.com')).toBeNull();
  });
  test('rejects unknown casinos and other website origins', () => {
    expect(casinoSlugFromHref('/go/not-a-casino', 'https://buitenlandsecasino.com')).toBeNull();
    expect(casinoSlugFromHref('https://example.com/go/winhero', 'https://buitenlandsecasino.com')).toBeNull();
  });
  test('retains the source page with a bounded size', () => {
    expect(clickSourcePath('/snelle-uitbetaling-ideal-casinos')).toBe('/snelle-uitbetaling-ideal-casinos');
    expect(clickSourcePath('/' + 'a'.repeat(300)).length).toBe(250);
    expect(clickSourcePath('invalid')).toBe('/');
  });
});