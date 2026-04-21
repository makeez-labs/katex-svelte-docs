<script lang="ts">
  import CodeBlock  from '$lib/components/CodeBlock.svelte'
  import PropsTable from '$lib/components/PropsTable.svelte'

  const props = [
    { name: 'formula',      type: 'string',  required: true, desc: 'LaTeX math expression' },
    { name: 'displayMode',  type: 'boolean', default: 'false', desc: 'Render in display (block) mode' },
    { name: 'class',        type: 'string',  default: "''", desc: 'Extra CSS classes' },
    { name: 'errorMode',    type: "'text'|'none'|'throw'", default: "'text'", desc: 'Error handling' },
  ]

  const inlineCode = `<script lang="ts">
  import { LatexMath } from 'katex-svelte'
<\/script>

<p>Rate equation: <LatexMath formula="\\text{rate} = k[A]^m[B]^n" /></p>
<p>pH definition: <LatexMath formula="pH = -\\log_{10}[\\ce{H+}]" /></p>
<p>Energy: <LatexMath formula="E = mc^2" /></p>
<p>Ideal gas: <LatexMath formula="PV = nRT" /></p>`

  const blockCode = `<script lang="ts">
  import { LatexBlock } from 'katex-svelte'
<\/script>

<LatexBlock
  formula="K_{eq} = \\frac{[\\text{products}]}{[\\text{reactants}]}"
  label="Equilibrium constant expression"
  number={1}
/>

<LatexBlock
  formula="\\Delta G = \\Delta H - T\\Delta S"
  label="Gibbs free energy"
  number={2}
/>

<LatexBlock
  formula="\\text{rate} = k[A]^m[B]^n"
  label="General rate equation"
/>`

  const chemMath = `<!-- Mix chemistry and math in LatexMath -->
<p>
  The equilibrium constant for
  <ChemEquation formula="N2 + 3H2 <=> 2NH3" /> is:
</p>
<LatexBlock
  formula="K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}"
/>`
</script>

<svelte:head><title>LatexMath & LatexBlock — katex-svelte</title></svelte:head>

<h1>LatexMath &amp; LatexBlock</h1>
<p class="lead">
  General LaTeX math rendering for rate equations, thermodynamics,
  equilibrium expressions, and any other mathematical content.
</p>

<div class="badge">Component · Math</div>

<h2>Import</h2>
<CodeBlock code={`import { LatexMath, LatexBlock } from 'katex-svelte'`} lang="typescript" />

<h2>LatexMath props</h2>
<PropsTable {props} />

<h2>LatexBlock props</h2>
<p>Same as <code>LatexMath</code> plus:</p>
<div class="extra-props">
  <div class="ep"><code>label</code> <span>string</span> — optional label below the equation</div>
  <div class="ep"><code>number</code> <span>string | number</span> — optional equation number on the right</div>
</div>

<h2>Inline math</h2>
<CodeBlock code={inlineCode} lang="svelte" />

<h2>Block math</h2>
<CodeBlock code={blockCode} lang="svelte" />

<h2>Mixing with ChemEquation</h2>
<CodeBlock code={chemMath} lang="svelte" />

<div class="next-bar">
  <a href="/docs/render-chem" class="next-link">renderChem utility →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  p    { margin-bottom: 12px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: var(--brand-light); color: var(--brand); border: 1px solid var(--brand-border); border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .extra-props { display: flex; flex-direction: column; gap: 8px; margin: 12px 0; }
  .ep { display: flex; align-items: center; gap: 12px; font-size: 13px; padding: 8px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); }
  .ep code { color: var(--brand-dark); }
  .ep span { color: var(--muted); font-family: 'JetBrains Mono', monospace; font-size: 12px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
