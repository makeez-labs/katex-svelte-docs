import { describe, it, expect } from 'vitest';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { navigation, CE_EXAMPLES } from '#lib/data/nav.js';
import { isValidChem, COMMON_FORMULAS, COMMON_REACTIONS } from 'katex-svelte';

const routesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/routes');

function routeExists(href: string): boolean {
  if (href === '/') return existsSync(path.join(routesDir, '+page.svelte'));
  return existsSync(path.join(routesDir, href, '+page.svelte'));
}

describe('navigation', () => {
  it('every nav href resolves to an existing route page', () => {
    const hrefs = navigation.flatMap((s) => s.items.map((i) => i.href));
    const missing = hrefs.filter((href) => !routeExists(href));
    expect(missing).toEqual([]);
  });

  it('has no duplicate hrefs', () => {
    const hrefs = navigation.flatMap((s) => s.items.map((i) => i.href));
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it('has unique labels within each section', () => {
    for (const section of navigation) {
      const labels = section.items.map((i) => i.label);
      expect(new Set(labels).size).toBe(labels.length);
    }
  });

  it('has at least one item per section', () => {
    for (const section of navigation) {
      expect(section.items.length).toBeGreaterThan(0);
    }
  });
});

describe('mhchem examples', () => {
  it('every quick-reference example is valid mhchem', () => {
    const invalid = CE_EXAMPLES.filter((ex) => !isValidChem(ex.input));
    expect(invalid.map((ex) => ex.input)).toEqual([]);
  });

  it('has unique example inputs', () => {
    const inputs = CE_EXAMPLES.map((ex) => ex.input);
    expect(new Set(inputs).size).toBe(inputs.length);
  });

  it('every example has a description', () => {
    for (const ex of CE_EXAMPLES) {
      expect(ex.desc.trim().length).toBeGreaterThan(0);
    }
  });

  it('every common formula is valid mhchem', () => {
    const invalid = Object.entries(COMMON_FORMULAS).filter(([, f]) => !isValidChem(f));
    expect(invalid).toEqual([]);
  });

  it('every common reaction is valid mhchem', () => {
    const invalid = Object.entries(COMMON_REACTIONS).filter(([, r]) => !isValidChem(r));
    expect(invalid).toEqual([]);
  });
});
