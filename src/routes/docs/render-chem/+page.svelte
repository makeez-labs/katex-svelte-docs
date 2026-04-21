<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function renderChem(formula: string, options?: RenderOptions): RenderResult
function renderChemBlock(formula: string, options?: RenderOptions): RenderResult

interface RenderResult {
  html:    string   // KaTeX-generated HTML
  error:   string | null
  isValid: boolean
}

interface RenderOptions {
  displayMode?:      boolean  // default: false
  errorMode?:        'text' | 'throw' | 'none'  // default: 'text'
  trust?:            boolean
  minRuleThickness?: number
  maxSize?:          number
}`

  const usage = `import { renderChem, renderChemBlock, isValidChem } from 'katex-svelte'

// Inline
const water = renderChem('H2O')
console.log(water.html)    // KaTeX HTML string
console.log(water.isValid) // true

// Block (display mode)
const haber = renderChemBlock('N2 + 3H2 <=> 2NH3')

// Validate before rendering
if (isValidChem(formula)) {
  const { html } = renderChem(formula)
  element.innerHTML = html
}

// Error handling modes
const r1 = renderChem('invalid\\\\', { errorMode: 'text' })  // error HTML inline
const r2 = renderChem('invalid\\\\', { errorMode: 'none' })  // { html: '', isValid: false }
try {
  renderChem('invalid\\\\', { errorMode: 'throw' })
} catch (e) { /* handle */ }`

  const svelteUsage = `<script lang="ts">
  import { onMount }    from 'svelte'
  import { renderChem } from 'katex-svelte'

  let { formula }: { formula: string } = $props()

  // $derived re-runs whenever formula changes
  let result = $derived(renderChem(formula))
<\/script>

<span role="math" aria-label={formula}>
  {@html result.html}
</span>`
</script>

<svelte:head><title>renderChem — katex-svelte</title></svelte:head>

<h1>renderChem</h1>
<p class="lead">
  The core rendering function — wraps a formula in <code>\ce{"{}"}</code>
  and calls KaTeX. Use this when you need the raw HTML string rather than
  a Svelte component.
</p>
<div class="badge">Utility</div>
<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />
<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />
<h2>In a Svelte component</h2>
<CodeBlock code={svelteUsage} lang="svelte" />
<div class="next-bar"><a href="/docs/render-auto" class="next-link">renderAuto →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
