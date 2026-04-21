<script lang="ts">
  import CodeBlock  from '$lib/components/CodeBlock.svelte'
  import PropsTable from '$lib/components/PropsTable.svelte'
  import { CE_EXAMPLES } from '$lib/data/nav.js'

  const props = [
    { name: 'formula',          type: 'string',  required: true, desc: 'Chemistry expression in mhchem \\ce{} notation (without the \\ce{} wrapper)' },
    { name: 'class',            type: 'string',  default: "''",  desc: 'Extra CSS classes on the wrapper span' },
    { name: 'errorMode',        type: "'text' | 'none' | 'throw'", default: "'text'", desc: 'How to handle invalid formulas' },
    { name: 'trust',            type: 'boolean', default: 'false', desc: 'Trust all KaTeX commands' },
    { name: 'minRuleThickness', type: 'number',  desc: 'Minimum line thickness in em' },
    { name: 'maxSize',          type: 'number',  default: '10', desc: 'Max size for \\Huge etc. in em' },
  ]

  const examples = [
    { formula: 'H2O',                      label: 'Molecular formula' },
    { formula: 'H2SO4',                    label: 'Sulfuric acid' },
    { formula: 'CH4 + 2O2 -> CO2 + 2H2O', label: 'Combustion' },
    { formula: 'N2 + 3H2 <=> 2NH3',        label: 'Equilibrium' },
    { formula: 'Fe^{2+} + 2e^- -> Fe',     label: 'Ionic equation' },
    { formula: '2H2 + O2 ->[\\Delta] 2H2O', label: 'With heat condition' },
    { formula: 'CaCO3 ->[\\text{heat}] CaO + CO2', label: 'Text condition' },
    { formula: 'Cl^{-}_{(aq)}',            label: 'State symbol' },
  ]

  const basic = `<script lang="ts">
  import { ChemEquation } from 'katex-svelte'
<\/script>

<p>Water is <ChemEquation formula="H2O" />.</p>
<p><ChemEquation formula="CH4 + 2O2 -> CO2 + 2H2O" /></p>
<p><ChemEquation formula="N2 + 3H2 <=> 2NH3" /></p>`

  const errorHandling = `<!-- Default: shows error text inline -->
<ChemEquation formula="H2O" errorMode="text" />

<!-- Silent — renders nothing on error -->
<ChemEquation formula="H2O" errorMode="none" />

<!-- Throws — catch the error yourself -->
<ChemEquation formula="H2O" errorMode="throw" />`
</script>

<svelte:head><title>ChemEquation — katex-svelte</title></svelte:head>

<h1>ChemEquation</h1>
<p class="lead">
  Renders a chemistry expression inline using mhchem's <code>\ce{"{}"}</code> notation.
  Wraps in a <code>&lt;span&gt;</code> so it flows naturally within prose text.
</p>

<div class="badge">Component · Inline</div>

<h2>Import</h2>
<CodeBlock code={`import { ChemEquation } from 'katex-svelte'`} lang="typescript" />

<h2>Props</h2>
<PropsTable {props} />

<h2>Examples</h2>
<CodeBlock code={basic} lang="svelte" />

<h2>mhchem notation reference</h2>
<div class="ref-table">
  <table>
    <thead><tr><th>formula prop</th><th>Description</th></tr></thead>
    <tbody>
      {#each examples as ex}
        <tr>
          <td><code>{ex.formula}</code></td>
          <td class="desc">{ex.label}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<h2>Error handling</h2>
<CodeBlock code={errorHandling} lang="svelte" />

<div class="next-bar">
  <a href="/docs/chem-block" class="next-link">ChemBlock →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: var(--brand-light); color: var(--brand); border: 1px solid var(--brand-border); border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .ref-table { overflow-x: auto; border: 1px solid var(--border); border-radius: var(--radius-lg); margin: 12px 0; }
  .ref-table table { width: 100%; border-collapse: collapse; font-size: 13px; }
  .ref-table th { background: var(--surface); padding: 9px 14px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--muted); border-bottom: 1px solid var(--border); }
  .ref-table td { padding: 9px 14px; border-bottom: 1px solid var(--border); color: var(--mid); }
  .ref-table tr:last-child td { border-bottom: none; }
  .ref-table tr:hover td { background: var(--surface); }
  .desc { color: var(--mid); }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
