<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const code = `<script lang="ts">
  import { ChemEquation, ChemBlock } from 'katex-svelte'
<\/script>

<!-- Molecular formulas -->
<p>Water: <ChemEquation formula="H2O" /></p>
<p>Sulfuric acid: <ChemEquation formula="H2SO4" /></p>
<p>Glucose: <ChemEquation formula="C6H12O6" /></p>
<p>Ammonia: <ChemEquation formula="NH3" /></p>

<!-- State symbols -->
<p><ChemEquation formula="NaCl_{(s)} + H2O_{(l)} -> Na+_{(aq)} + Cl^-_{(aq)}" /></p>

<!-- Hydrates -->
<p>Hydrated copper sulfate: <ChemEquation formula="CuSO4.5H2O" /></p>

<!-- Isotopes -->
<p>Carbon-14: <ChemEquation formula="^{14}_{6}C" /></p>

<!-- Block equations -->
<ChemBlock formula="2H2 + O2 -> 2H2O" label="Formation of water" />
<ChemBlock formula="C6H12O6 + 6O2 -> 6CO2 + 6H2O" label="Aerobic respiration" />`
</script>

<svelte:head><title>Chemistry equations — katex-svelte examples</title></svelte:head>
<h1>Chemistry equations</h1>
<p class="lead">Common chemical formulas and equations using <code>ChemEquation</code> and <code>ChemBlock</code>.</p>
<CodeBlock {code} lang="svelte" />
<div class="next-bar"><a href="/examples/chemistry/reactions" class="next-link">Reactions →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
