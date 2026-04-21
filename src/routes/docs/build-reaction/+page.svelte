<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const sig = `function buildReaction(
  reactants: string[],
  products:  string[],
  arrow?:    ArrowType,    // default: '->'
  above?:    string,       // text above the arrow
  below?:    string,       // text below the arrow
): string

type ArrowType = '->' | '<-' | '<=>' | '<->'`

  const usage = `import { buildReaction, ChemBlock } from 'katex-svelte'

// Forward reaction
const combustion = buildReaction(
  ['CH4', '2O2'],
  ['CO2', '2H2O']
)
// → "CH4 + 2O2 -> CO2 + 2H2O"

// Equilibrium
const haber = buildReaction(['N2', '3H2'], ['2NH3'], '<=>')
// → "N2 + 3H2 <=> 2NH3"

// With conditions above/below arrow
const photosynthesis = buildReaction(
  ['6CO2', '6H2O'],
  ['C6H12O6', '6O2'],
  '->',
  '\\\\text{light}',
  '\\\\text{chlorophyll}'
)
// → "6CO2 + 6H2O ->[ \\text{light} ][ \\text{chlorophyll} ] C6H12O6 + 6O2"`

  const svelte = `<script lang="ts">
  import { buildReaction, ChemBlock } from 'katex-svelte'

  let reactants = $state(['H2', 'O2'])
  let products  = $state(['H2O'])

  let equation = $derived(buildReaction(reactants, products))
<\/script>

<ChemBlock formula={equation} />`
</script>

<svelte:head><title>buildReaction — katex-svelte</title></svelte:head>
<h1>buildReaction</h1>
<p class="lead">Build a reaction SMILES string in mhchem notation from arrays of reactants and products. Useful for dynamically generating equations.</p>
<div class="badge">Utility</div>
<h2>Signature</h2>
<CodeBlock code={sig} lang="typescript" />
<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />
<h2>In a Svelte component</h2>
<CodeBlock code={svelte} lang="svelte" />
<div class="next-bar"><a href="/docs/search" class="next-link">searchFormulas →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
