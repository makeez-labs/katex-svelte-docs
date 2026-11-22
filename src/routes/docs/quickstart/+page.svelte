<script lang="ts">
  import CodeBlock from '#lib/components/CodeBlock.svelte'
  import ExamplePreview from '#lib/components/ExamplePreview.svelte'
  import { ChemEquation, ChemBlock, ChemAuto, ChemNotation, LatexMath, LatexBlock } from 'katex-svelte'

  const inline = `<script lang="ts">
  import { ChemEquation } from 'katex-svelte'
<\/script>

<p>Water is <ChemEquation formula="H2O" />.</p>
<p>Combustion: <ChemEquation formula="CH4 + 2O2 -> CO2 + 2H2O" /></p>`

  const block = `<ChemBlock
  formula="N2 + 3H2 <=> 2NH3"
  label="Haber process"
  number={1}
/>`

  const auto = `<ChemAuto
  text="The pH of water at 25°C is 7, since \\ce{H2O <=> H+ + OH^-}
        and $$pH = -\\log_{10}[\\ce{H+}]$$ gives exactly 7."
/>`

  const notation = `<ChemNotation
  formula="Fe2O3 + 3CO -> 2Fe + 3CO2"
  name="Reduction of iron(III) oxide"
  desc="Used in the blast furnace extraction of iron"
  type="reaction"
/>`

  const math = `<p>The rate equation is <LatexMath formula="\\text{rate} = k[A]^m[B]^n" /></p>

<LatexBlock
  formula="K_{eq} = \\frac{[\\text{products}]}{[\\text{reactants}]}"
  label="Equilibrium constant expression"
/>`
</script>

<svelte:head><title>Quick start — katex-svelte</title></svelte:head>

<h1>Quick start</h1>
<p class="lead">From install to rendered equation in under 2 minutes.</p>

<h2>1. Inline chemical formula</h2>
<p>Use <code>ChemEquation</code> for formulas embedded in prose text.</p>
<CodeBlock code={inline} lang="svelte" />
<ExamplePreview>
  <p>Water is <ChemEquation formula="H2O" />.</p>
  <p>Combustion: <ChemEquation formula="CH4 + 2O2 -> CO2 + 2H2O" /></p>
</ExamplePreview>

<h2>2. Display block equation</h2>
<p>Use <code>ChemBlock</code> for important reactions centred on their own line.</p>
<CodeBlock code={block} lang="svelte" />
<ExamplePreview label="Live preview — ChemBlock">
  <ChemBlock formula="N2 + 3H2 <=> 2NH3" label="Haber process" number={1} />
</ExamplePreview>

<h2>3. Auto-render mixed prose</h2>
<p>
  Use <code>ChemAuto</code> to write natural text with embedded
  <code>\ce{"{}"}</code>, <code>$...$</code>, and <code>$$...$$</code>
  — all rendered automatically.
</p>
<CodeBlock code={auto} lang="svelte" />
<ExamplePreview label="Live preview — ChemAuto">
  <ChemAuto text={'The pH of water at 25°C is 7, since \\ce{H2O <=> H+ + OH^-} and $$pH = -\\log_{10}[\\ce{H+}]$$ gives exactly 7.'} />
</ExamplePreview>

<h2>4. Labelled notation card</h2>
<p>Use <code>ChemNotation</code> for formatted reference cards in lessons.</p>
<CodeBlock code={notation} lang="svelte" />
<ExamplePreview label="Live preview — ChemNotation">
  <ChemNotation
    formula="Fe2O3 + 3CO -> 2Fe + 3CO2"
    name="Reduction of iron(III) oxide"
    desc="Used in the blast furnace extraction of iron"
    type="reaction"
  />
</ExamplePreview>

<h2>5. Math expressions</h2>
<p>Use <code>LatexMath</code> and <code>LatexBlock</code> for rate equations, equilibrium expressions, and other math.</p>
<CodeBlock code={math} lang="svelte" />
<ExamplePreview label="Live preview — LatexMath & LatexBlock">
  <p>The rate equation is <LatexMath formula={'\\text{rate} = k[A]^m[B]^n'} /></p>
  <LatexBlock
    formula={'K_{eq} = \\frac{[\\text{products}]}{[\\text{reactants}]}'}
    label="Equilibrium constant expression"
  />
</ExamplePreview>

<div class="next-bar">
  <a href="/docs/chem-equation" class="next-link">ChemEquation API →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 32px; }
  p    { margin-bottom: 12px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
