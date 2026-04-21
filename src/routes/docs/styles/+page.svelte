<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'
</script>

<svelte:head><title>KaTeX styles — katex-svelte</title></svelte:head>
<h1>KaTeX styles</h1>
<p class="lead">KaTeX requires its own CSS to render correctly. You need to include it once in your app.</p>

<h2>Option 1 — Import from the package</h2>
<CodeBlock code={`import 'katex-svelte/styles'`} lang="typescript" title="src/routes/+layout.svelte script" />

<h2>Option 2 — CDN link in app.html</h2>
<CodeBlock code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />`} lang="html" />

<h2>Option 3 — Preload for faster render</h2>
<CodeBlock code={`<link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />`} lang="html" />

<p>Without the stylesheet, equations will render as unstyled HTML — the math structure is correct but it will not look right.</p>

<div class="next-bar"><a href="/docs/chem-equation" class="next-link">ChemEquation →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  p { margin-bottom: 12px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
