<script lang="ts">
  import CodeBlock  from '$lib/components/CodeBlock.svelte'
  import PropsTable from '$lib/components/PropsTable.svelte'

  const props = [
    { name: 'formula',  type: 'string', required: true, desc: 'Chemistry formula in mhchem notation' },
    { name: 'label',    type: 'string', desc: 'Optional label shown below the equation' },
    { name: 'number',   type: 'string | number', desc: 'Optional equation number shown on the right' },
    { name: 'class',    type: 'string', default: "''", desc: 'Extra CSS classes' },
    { name: 'errorMode', type: "'text'|'none'|'throw'", default: "'text'", desc: 'Error handling mode' },
  ]

  const code = `<ChemBlock formula="CH4 + 2O2 -> CO2 + 2H2O" label="Combustion of methane" />

<ChemBlock
  formula="N2 + 3H2 <=> 2NH3"
  label="Haber process"
  number={1}
/>

<ChemBlock
  formula="6CO2 + 6H2O ->[\\text{light}][\\text{chlorophyll}] C6H12O6 + 6O2"
  label="Photosynthesis"
  number={2}
/>`
</script>
<svelte:head><title>ChemBlock — katex-svelte</title></svelte:head>
<h1>ChemBlock</h1>
<p class="lead">Renders a chemistry equation in display (block) mode — centred on its own line. Ideal for important reactions in lessons and exam papers.</p>
<div class="badge">Component · Block</div>
<h2>Import</h2>
<CodeBlock code={`import { ChemBlock } from 'katex-svelte'`} lang="typescript" />
<h2>Props</h2>
<PropsTable {props} />
<h2>Examples</h2>
<CodeBlock {code} lang="svelte" />
<div class="next-bar"><a href="/docs/chem-auto" class="next-link">ChemAuto →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: var(--brand-light); color: var(--brand); border: 1px solid var(--brand-border); border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
