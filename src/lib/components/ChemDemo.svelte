<script lang="ts">
  /**
   * ChemDemo — shows a live rendered chemistry equation alongside its source.
   * Used throughout the docs to demonstrate mhchem notation.
   */
  import CodeBlock from './CodeBlock.svelte'

  interface Props {
    /** The \ce{} formula (without the wrapper) */
    formula:  string
    /** Optional label */
    label?:   string
    /** Show as block (display mode) */
    block?:   boolean
  }

  let { formula, label, block = false }: Props = $props()

  // Build the code snippet shown under the demo
  let snippet = $derived(
    block
      ? `<ChemBlock formula="${formula}" />`
      : `<ChemEquation formula="${formula}" />`
  )

  // Rendered HTML via KaTeX — done server-side in real usage
  // In the docs we just show the source; users run it in their own apps
</script>

<div class="demo">
  <div class="demo-label">
    {#if label}<span class="label-text">{label}</span>{/if}
    <span class="ce-src"><code>\ce{"{formula}"}</code></span>
  </div>
  <div class="demo-preview {block ? 'block-mode' : ''}">
    <div class="placeholder">
      <!-- In the real docs site this renders via the imported component -->
      <code class="formula-display">\ce{"{formula}"}</code>
      <span class="note">renders in browser</span>
    </div>
  </div>
  <CodeBlock code={snippet} lang="svelte" />
</div>

<style>
  .demo { margin: 20px 0; }
  .demo-label { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
  .label-text { font-size: 13px; font-weight: 600; color: var(--dark); }
  .ce-src code { font-size: 12px; }
  .demo-preview { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 20px 24px; margin-bottom: 0; }
  .block-mode { text-align: center; padding: 28px 24px; }
  .placeholder { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .block-mode .placeholder { justify-content: center; flex-direction: column; gap: 6px; }
  .formula-display { font-size: 15px; color: var(--brand-dark); }
  .note { font-size: 11px; color: var(--muted); }
</style>
