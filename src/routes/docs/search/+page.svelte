<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const usage = `import {
  searchFormulas,
  searchReactions,
  COMMON_FORMULAS,
  COMMON_REACTIONS,
} from 'katex-svelte'

// Search formulas by name
searchFormulas('acid')
// → [
//     { name: 'hydrochloric acid', formula: 'HCl' },
//     { name: 'sulfuric acid',     formula: 'H2SO4' },
//     ...
//   ]

searchFormulas('water')
// → [{ name: 'water', formula: 'H2O' }]

// Search reactions
searchReactions('combustion')
// → [
//     { name: 'combustion of methane', equation: 'CH4 + 2O2 -> CO2 + 2H2O' },
//     { name: 'combustion of ethanol', equation: 'C2H5OH + 3O2 -> 2CO2 + 3H2O' },
//   ]

// Direct lookup
COMMON_FORMULAS['sulfuric acid'] // → 'H2SO4'
COMMON_REACTIONS['haber process'] // → 'N2 + 3H2 <=> 2NH3'`

  const autocomplete = `<script lang="ts">
  import { searchFormulas, ChemEquation } from 'katex-svelte'

  let query   = $state('')
  let results = $derived(query.length > 1 ? searchFormulas(query) : [])
<\/script>

<input bind:value={query} placeholder="Search formulas..." />

{#each results as r}
  <div>
    <strong>{r.name}</strong>
    <ChemEquation formula={r.formula} />
  </div>
{/each}`
</script>

<svelte:head><title>searchFormulas — katex-svelte</title></svelte:head>
<h1>searchFormulas</h1>
<p class="lead">Search the built-in database of 40+ common chemical formulas and 15+ KCSE reactions by name. Useful for autocomplete fields in Paa Campus.</p>
<div class="badge">Utility</div>
<h2>Usage</h2>
<CodeBlock code={usage} lang="typescript" />
<h2>Autocomplete example</h2>
<CodeBlock code={autocomplete} lang="svelte" />
<div class="next-bar"><a href="/docs/elements" class="next-link">ELEMENTS →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2 { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: #fef3c7; color: #92400e; border: 1px solid #fde68a; border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
