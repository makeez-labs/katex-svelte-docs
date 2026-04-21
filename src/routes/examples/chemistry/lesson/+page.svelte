<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const code = `<script lang="ts">
  import {
    ChemAuto, ChemBlock, ChemNotation, LatexBlock, ChemEquation
  } from 'katex-svelte'
<\/script>

<!-- Lesson: The Haber Process -->

<h2>The Haber Process</h2>

<ChemAuto text="The Haber process is used for the industrial manufacture of
  ammonia (\\ce{NH3}), which is essential for producing fertilisers." />

<h3>The reaction</h3>

<ChemBlock
  formula="N2_{(g)} + 3H2_{(g)} <=> 2NH3_{(g)}"
  label="Haber process — reversible reaction"
  number={1}
/>

<ChemAuto text="The reaction is exothermic: $\\Delta H = -92\\text{ kJ/mol}$.
  This means heat is released when ammonia is formed." />

<h3>Industrial conditions</h3>

<ChemAuto text="The reaction is carried out at approximately $450°C$ and
  $200\\text{ atm}$ pressure using an iron catalyst. These conditions
  represent a compromise between yield and rate." />

<h3>Le Chatelier's principle</h3>

<ChemAuto text="According to Le Chatelier's principle, increasing pressure
  favours the forward reaction since $4$ moles of gas (\\ce{N2 + 3H2})
  become $2$ moles (\\ce{2NH3}). However, very high pressures are
  expensive and dangerous." />

<h3>Equilibrium constant</h3>

<LatexBlock
  formula="K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3}"
  label="Equilibrium constant expression for the Haber process"
  number={2}
/>

<h3>Key compounds</h3>

<ChemNotation
  formula="NH3"
  name="Ammonia"
  desc="Colourless gas with a pungent smell. Highly soluble in water.
        Used in fertilisers, cleaning products, and explosives."
  type="formula"
/>

<ChemNotation
  formula="NH4NO3"
  name="Ammonium nitrate"
  desc="Produced by reacting ammonia with nitric acid.
        Used as a nitrogen-rich fertiliser."
  type="formula"
/>`
</script>

<svelte:head><title>Lesson content — katex-svelte examples</title></svelte:head>

<h1>Lesson content</h1>
<p class="lead">
  A complete chemistry lesson on the Haber process — showing how
  <code>ChemAuto</code>, <code>ChemBlock</code>, <code>ChemNotation</code>,
  and <code>LatexBlock</code> work together in real lesson content.
</p>

<CodeBlock {code} lang="svelte" />

<div class="next-bar">
  <a href="/examples/math/expressions" class="next-link">Math expressions →</a>
</div>

<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; line-height: 1.6; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
