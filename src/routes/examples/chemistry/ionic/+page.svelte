<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const code = `<script lang="ts">
  import { ChemEquation, ChemBlock, ChemNotation } from 'katex-svelte'
<\/script>

<!-- Ionic equations -->
<ChemBlock formula="H+ + OH^- -> H2O"                               label="Neutralisation (net ionic)"         />
<ChemBlock formula="Ag+_{(aq)} + Cl^-_{(aq)} -> AgCl_{(s)}"        label="Precipitation of silver chloride"   />
<ChemBlock formula="Zn_{(s)} + 2H+_{(aq)} -> Zn^{2+}_{(aq)} + H2_{(g)}" label="Zinc dissolving in acid"     />
<ChemBlock formula="Fe^{3+} + 3OH^- -> Fe(OH)3"                     label="Precipitation of iron(III) hydroxide" />

<!-- Half equations -->
<ChemBlock formula="Zn -> Zn^{2+} + 2e^-"        label="Oxidation half-equation"  number={1} />
<ChemBlock formula="Cu^{2+} + 2e^- -> Cu"         label="Reduction half-equation"  number={2} />
<ChemBlock formula="Zn + Cu^{2+} -> Zn^{2+} + Cu" label="Overall ionic equation"   number={3} />

<!-- Dissociation -->
<ChemNotation
  formula="H2SO4 -> 2H+ + SO4^{2-}"
  name="Dissociation of sulfuric acid"
  desc="Strong acid — fully dissociates in aqueous solution"
  type="ionic"
/>`
</script>

<svelte:head><title>Ionic equations — katex-svelte examples</title></svelte:head>
<h1>Ionic equations</h1>
<p class="lead">Ionic equations, half-equations, and dissociation reactions.</p>
<CodeBlock {code} lang="svelte" />
<div class="next-bar"><a href="/examples/chemistry/lesson" class="next-link">Lesson content →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
