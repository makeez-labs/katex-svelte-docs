<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const code = `<script lang="ts">
  import { ChemBlock, ChemNotation } from 'katex-svelte'
<\/script>

<!-- Common reactions as blocks -->
<ChemBlock formula="CH4 + 2O2 -> CO2 + 2H2O"          label="Combustion of methane"       />
<ChemBlock formula="C2H5OH + 3O2 -> 2CO2 + 3H2O"      label="Combustion of ethanol"        />
<ChemBlock formula="N2 + 3H2 <=> 2NH3"                 label="Haber process"                />
<ChemBlock formula="2SO2 + O2 <=> 2SO3"                label="Contact process"              />
<ChemBlock formula="CaCO3 ->[\\Delta] CaO + CO2"       label="Thermal decomposition"        />
<ChemBlock formula="Fe2O3 + 3CO -> 2Fe + 3CO2"         label="Reduction of iron(III) oxide" />

<!-- As notation cards -->
<ChemNotation
  formula="6CO2 + 6H2O ->[ light ][ chlorophyll ] C6H12O6 + 6O2"
  name="Photosynthesis"
  desc="Light energy is used to convert CO₂ and H₂O into glucose"
  type="reaction"
/>

<ChemNotation
  formula="N2 + 3H2 <=> 2NH3"
  name="Haber process"
  desc="Industrial production of ammonia. Conditions: 450°C, 200 atm, iron catalyst"
  type="equilibrium"
/>`
</script>

<svelte:head><title>Reactions — katex-svelte examples</title></svelte:head>
<h1>Reactions</h1>
<p class="lead">Chemical reactions with various arrow types and conditions.</p>
<CodeBlock {code} lang="svelte" />
<div class="next-bar"><a href="/examples/chemistry/ionic" class="next-link">Ionic equations →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
