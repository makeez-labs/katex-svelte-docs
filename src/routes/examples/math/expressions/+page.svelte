<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const expressionsCode = `<script lang="ts">
  import { LatexMath, LatexBlock } from 'katex-svelte'
<\/script>

<!-- Rate equations -->
<p>Rate: <LatexMath formula="\\text{rate} = k[A]^m[B]^n" /></p>

<!-- pH and pOH -->
<p>pH: <LatexMath formula="pH = -\\log_{10}[\\ce{H+}]" /></p>
<p>pOH: <LatexMath formula="pOH = -\\log_{10}[\\ce{OH-}]" /></p>
<p>At 25°C: <LatexMath formula="pH + pOH = 14" /></p>

<!-- Ideal gas law -->
<LatexBlock formula="PV = nRT" label="Ideal gas law" />

<!-- Arrhenius equation -->
<LatexBlock
  formula="k = Ae^{-E_a/RT}"
  label="Arrhenius equation"
  number={1}
/>

<!-- Gibbs free energy -->
<LatexBlock
  formula="\\Delta G = \\Delta H - T\\Delta S"
  label="Gibbs free energy"
  number={2}
/>`
</script>

<svelte:head><title>Math expressions — katex-svelte examples</title></svelte:head>
<h1>Math expressions</h1>
<p class="lead">Rate equations, thermodynamics, and other chemistry math using <code>LatexMath</code> and <code>LatexBlock</code>.</p>
<CodeBlock code={expressionsCode} lang="svelte" />
<div class="next-bar"><a href="/examples/math/mixed" class="next-link">Mixed text →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
