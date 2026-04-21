<script lang="ts">
  import CodeBlock  from '$lib/components/CodeBlock.svelte'
  import PropsTable from '$lib/components/PropsTable.svelte'

  const props = [
    { name: 'text',              type: 'string',  required: true,  desc: 'Text containing embedded \\ce{}, $...$, $$...$$ expressions' },
    { name: 'tag',               type: 'string',  default: "'p'",  desc: 'HTML element to wrap the output — p, div, span, etc.' },
    { name: 'class',             type: 'string',  default: "''",   desc: 'Extra CSS classes' },
    { name: 'chemistry',         type: 'boolean', default: 'true', desc: 'Whether to render \\ce{} expressions' },
    { name: 'errorMode',         type: "'text'|'none'|'throw'", default: "'text'", desc: 'Error handling for invalid expressions' },
    { name: 'inlineDelimiters',  type: '[string, string][]',    desc: 'Custom inline math delimiters (default: $...$)' },
    { name: 'blockDelimiters',   type: '[string, string][]',    desc: 'Custom block math delimiters (default: $$...$$)' },
  ]

  const basic = `<script lang="ts">
  import { ChemAuto } from 'katex-svelte'
<\/script>

<!-- Inline chemistry and math mixed with text -->
<ChemAuto
  text="Water (\\ce{H2O}) has a molar mass of $18\\text{ g/mol}$."
/>

<!-- Block equation in prose -->
<ChemAuto
  text="The equilibrium constant is defined as $$K_{eq} = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}$$"
/>

<!-- Multiple expressions -->
<ChemAuto
  text="Combustion of methane: \\ce{CH4 + 2O2 -> CO2 + 2H2O}.
        The enthalpy change is $\\Delta H = -890\\text{ kJ/mol}$."
/>`

  const lessonCode = `<script lang="ts">
  import { ChemAuto } from 'katex-svelte'

  const lesson = \`
    The Haber process produces ammonia (\\\\ce{NH3}) for fertilisers.
    The reaction is reversible: \\\\ce{N2 + 3H2 <=> 2NH3}.
    At equilibrium, the yield is described by:
    $$K_p = \\\\frac{p(\\\\ce{NH3})^2}{p(\\\\ce{N2}) \\\\cdot p(\\\\ce{H2})^3}$$
    where \\\\(p\\\\) represents partial pressure.
  \`
<\/script>

<ChemAuto text={lesson} />`

  const disableChem = `<!-- Math only — no chemistry rendering -->
<ChemAuto
  text="The rate is $k = Ae^{-E_a/RT}$"
  chemistry={false}
/>

<!-- Use as a span for inline use -->
<ChemAuto
  text="\\ce{H2O} melts at $0°C$"
  tag="span"
/>`
</script>

<svelte:head><title>ChemAuto — katex-svelte</title></svelte:head>

<h1>ChemAuto</h1>
<p class="lead">
  Automatically finds and renders all embedded chemistry and math expressions
  in a string of text. The most powerful component for lesson content and
  mixed prose.
</p>

<div class="badge">Component · Auto-render</div>

<h2>Import</h2>
<CodeBlock code={`import { ChemAuto } from 'katex-svelte'`} lang="typescript" />

<h2>Supported syntax</h2>
<div class="syntax-grid">
  {#each [
    { syntax: '\\ce{H2O}',   desc: 'Chemistry — mhchem notation' },
    { syntax: '$E = mc^2$',  desc: 'Inline math' },
    { syntax: '$$...$$',     desc: 'Display / block math' },
    { syntax: '\\(...\\)',   desc: 'Inline math (alt)' },
    { syntax: '\\[...\\]',   desc: 'Display math (alt)' },
  ] as s}
    <div class="syntax-item">
      <code>{s.syntax}</code>
      <span>{s.desc}</span>
    </div>
  {/each}
</div>

<h2>Props</h2>
<PropsTable {props} />

<h2>Basic usage</h2>
<CodeBlock code={basic} lang="svelte" />

<h2>Full lesson paragraph</h2>
<CodeBlock code={lessonCode} lang="svelte" />

<h2>Options</h2>
<CodeBlock code={disableChem} lang="svelte" />

<div class="tip">
  <strong>Tip:</strong> Use <code>ChemAuto</code> for lesson body text, exam questions,
  and any content where chemistry and math are mixed with prose.
  For standalone equations use <code>ChemEquation</code> or <code>ChemBlock</code>.
</div>

<div class="next-bar">
  <a href="/docs/chem-notation" class="next-link">ChemNotation →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: var(--brand-light); color: var(--brand); border: 1px solid var(--brand-border); border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .syntax-grid { display: flex; flex-direction: column; gap: 8px; margin: 12px 0 16px; }
  .syntax-item { display: flex; align-items: center; gap: 16px; padding: 8px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); font-size: 13px; }
  .syntax-item code { min-width: 120px; }
  .syntax-item span { color: var(--mid); }
  .tip { background: var(--brand-light); border: 1px solid var(--brand-border); border-radius: var(--radius-lg); padding: 14px 18px; font-size: 14px; color: var(--brand-dark); line-height: 1.6; margin-top: 24px; }
  .tip strong { font-weight: 700; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
