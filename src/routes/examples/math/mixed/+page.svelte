<script lang="ts">
  import CodeBlock from '$lib/components/CodeBlock.svelte'

  const code = `<script lang="ts">
  import { ChemAuto } from 'katex-svelte'
<\/script>

<!-- Exam question style -->
<ChemAuto text="
  (a) Write the equation for the complete combustion of propane (\\ce{C3H8}).
  
  (b) Calculate the molar mass of propane given that $M_r(C) = 12$,
      $M_r(H) = 1$. Show your working.
  
  (c) The equilibrium \\ce{N2 + 3H2 <=> 2NH3} has \\(K_c = 6.0 \\times 10^{-2}\\)
      at $500°C$. State what happens to \\(K_c\\) if the temperature is increased.
" />

<!-- Revision notes style -->
<ChemAuto text="
  Key formulae for rates of reaction:
  The rate equation is $\\text{rate} = k[A]^m[B]^n$ where \\(k\\) is the 
  rate constant. The Arrhenius equation $$k = Ae^{-E_a/RT}$$ shows how 
  \\(k\\) depends on temperature \\(T\\) and activation energy \\(E_a\\).
  
  For the reaction \\ce{2HI_{(g)} -> H2_{(g)} + I2_{(g)}}, the rate 
  expression is $\\text{rate} = k[\\ce{HI}]^2$.
" />`
</script>

<svelte:head><title>Mixed text — katex-svelte examples</title></svelte:head>
<h1>Mixed text with ChemAuto</h1>
<p class="lead">
  Write natural exam questions and lesson notes with embedded chemistry and math —
  <code>ChemAuto</code> handles all the rendering.
</p>
<CodeBlock {code} lang="svelte" />
<div class="next-bar"><a href="/examples/chemistry/equations" class="next-link">Back to equations →</a></div>
<style>
  h1 { font-size: 34px; font-weight: 900; letter-spacing: -0.03em; margin-bottom: 10px; }
  .lead { font-size: 16px; margin-bottom: 24px; line-height: 1.6; }
  .next-bar { margin-top: 48px; padding-top: 24px; border-top: 1px solid var(--border); }
  .next-link { font-weight: 700; font-size: 15px; color: var(--brand); text-decoration: none; }
  .next-link:hover { text-decoration: underline; }
</style>
