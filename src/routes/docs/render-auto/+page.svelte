<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function renderAuto(text: string, options?: AutoRenderOptions): string

interface AutoRenderOptions extends RenderOptions {
  inlineDelimiters?: [string, string][]  // default: [['$','$'], ['\\(','\\)']]
  blockDelimiters?:  [string, string][]  // default: [['$$','$$'], ['\\[','\\]']]
  chemistry?:        boolean             // default: true
}`

  const usage = `import { renderAuto } from 'katex-svelte'

// Mixed chemistry and math
const html = renderAuto(
  'Water (\\\\ce{H2O}) has pH $-\\\\log_{10}[\\\\ce{H+}]$'
)
document.getElementById('output').innerHTML = html

// Chemistry only
const chemOnly = renderAuto('\\\\ce{CH4 + 2O2 -> CO2 + 2H2O}', {
  chemistry: true,
  // No $ delimiters means math is ignored
  inlineDelimiters: [],
  blockDelimiters:  [],
})`
</script>

<svelte:head><title>renderAuto — katex-svelte</title></svelte:head>
<h1>renderAuto</h1>
<p class="lead">Parse a string and render all embedded <code>\ce{"{}"}</code>, <code>$...$</code>, and <code>$$...$$</code> expressions. Returns a safe HTML string.</p>
<div class="badge">Utility</div>
<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />
<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />
<p>For Svelte components, use <a href="/docs/chem-auto">ChemAuto</a> — it wraps <code>renderAuto</code> with reactive updates.</p>
<div class="next-bar"><a href="/docs/build-reaction" class="next-link">buildReaction →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  p { margin-bottom: 12px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
