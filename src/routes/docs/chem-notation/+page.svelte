<script lang="ts">
  import CodeBlock  from '#lib/components/CodeBlock.svelte'
  import PropsTable from '#lib/components/PropsTable.svelte'
  import ExamplePreview from '#lib/components/ExamplePreview.svelte'
  import { ChemNotation } from 'katex-svelte'

  const props = [
    { name: 'formula', type: 'string',  required: true, desc: 'Chemistry formula in mhchem notation' },
    { name: 'name',    type: 'string',  desc: 'Name of the compound or reaction' },
    { name: 'desc',    type: 'string',  desc: 'Short description or context' },
    { name: 'type',    type: "'formula'|'reaction'|'equilibrium'|'ionic'", default: "'formula'", desc: 'Type — controls accent colour and label' },
    { name: 'class',   type: 'string',  default: "''", desc: 'Extra CSS classes' },
  ]

  const code = `<script lang="ts">
  import { ChemNotation } from 'katex-svelte'
<\/script>

<!-- Compound formula -->
<ChemNotation
  formula="H2SO4"
  name="Sulfuric acid"
  desc="Strong diprotic acid — fully dissociates in water"
  type="formula"
/>

<!-- Reaction -->
<ChemNotation
  formula="Fe2O3 + 3CO -> 2Fe + 3CO2"
  name="Reduction of iron(III) oxide"
  desc="Used in the blast furnace extraction of iron"
  type="reaction"
/>

<!-- Equilibrium -->
<ChemNotation
  formula="N2 + 3H2 <=> 2NH3"
  name="Haber process"
  desc="Industrial production of ammonia — reversible reaction"
  type="equilibrium"
/>

<!-- Ionic -->
<ChemNotation
  formula="H+ + OH^- -> H2O"
  name="Neutralisation"
  desc="Net ionic equation for acid-base neutralisation"
  type="ionic"
/>`

  const typeColors = `<!-- Type → accent colour -->
formula     → blue
reaction    → green
equilibrium → amber
ionic       → purple`

  const theming = `/* The card adapts via CSS custom properties — override them for dark mode */
:root {
  --chem-notation-border: #e2e8f0;   /* card border */
  --chem-notation-bg:     #f8fafc;   /* card background */
  --chem-notation-text:   #0f172a;   /* name text colour */
  --chem-notation-muted:  #64748b;   /* description text colour */
}

/* Dark mode example */
@media (prefers-color-scheme: dark) {
  :root {
    --chem-notation-border: #334155;
    --chem-notation-bg:     #1e293b;
    --chem-notation-text:   #f1f5f9;
    --chem-notation-muted:  #94a3b8;
  }
}`
</script>

<svelte:head><title>ChemNotation — katex-svelte</title></svelte:head>

<h1>ChemNotation</h1>
<p class="lead">
  Renders a labelled chemistry notation card — perfect for lesson reference
  sections, glossaries, and revision materials in Paa Campus.
</p>

<div class="badge">Component · Card</div>

<h2>Import</h2>
<CodeBlock code={`import { ChemNotation } from 'katex-svelte'`} lang="typescript" />

<h2>Props</h2>
<PropsTable {props} />

<h2>Examples</h2>
<CodeBlock code={code} lang="svelte" />
<ExamplePreview label="Live preview">
  <ChemNotation
    formula="H2SO4"
    name="Sulfuric acid"
    desc="Strong diprotic acid — fully dissociates in water"
    type="formula"
  />
  <ChemNotation
    formula="N2 + 3H2 <=> 2NH3"
    name="Haber process"
    desc="Industrial production of ammonia — reversible reaction"
    type="equilibrium"
  />
</ExamplePreview>

<h2>Type colours</h2>
<CodeBlock code={typeColors} lang="text" />

<h2>Theming / dark mode</h2>
<p>
  The card's surface colours are driven by CSS custom properties —
  override them in your own stylesheet to match dark themes.
</p>
<CodeBlock code={theming} lang="css" />

<div class="next-bar">
  <a href="/docs/latex-math" class="next-link">LatexMath →</a>
</div>

<style>
  h1   { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  h2   { font-size: 19px; font-weight: 700; margin: 32px 0 12px; padding-top: 32px; border-top: 1px solid var(--border); }
  .lead { font-size: 16px; margin-bottom: 16px; }
  .badge { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; background: var(--brand-light); color: var(--brand); border: 1px solid var(--brand-border); border-radius: 20px; padding: 3px 10px; margin-bottom: 28px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
