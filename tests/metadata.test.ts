import { describe, it, expect } from 'vitest';
import { metadata } from '#lib/data/metadata.js';

describe('site metadata', () => {
  it('has all required fields', () => {
    expect(metadata.title.trim().length).toBeGreaterThan(0);
    expect(metadata.description.trim().length).toBeGreaterThan(0);
    expect(metadata.siteUrl.trim().length).toBeGreaterThan(0);
    expect(metadata.author.name.trim().length).toBeGreaterThan(0);
    expect(metadata.author.url.trim().length).toBeGreaterThan(0);
  });

  it('uses an https site URL', () => {
    expect(metadata.siteUrl).toMatch(/^https:\/\//);
  });

  it('has an ISO-formatted lastUpdated date', () => {
    expect(metadata.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('has a description that works as a meta tag', () => {
    expect(metadata.description.length).toBeLessThanOrEqual(200);
  });
});
