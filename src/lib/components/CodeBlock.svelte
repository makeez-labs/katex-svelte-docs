<script lang="ts">
  interface Props { code: string; lang?: string; title?: string }
  let { code, lang = 'svelte', title }: Props = $props()
  let copied = $state(false)
  function copy() {
    navigator.clipboard.writeText(code).then(() => {
      copied = true; setTimeout(() => copied = false, 1800)
    })
  }
</script>

<div class="cb">
  <div class="cb-header">
    <span class="cb-lang">{title ?? lang}</span>
    <button class="cb-copy" onclick={copy}>
      {#if copied}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6l2.5 2.5L10.5 2" stroke="#4ade80" stroke-width="1.5" stroke-linecap="round"/></svg>
        Copied!
      {:else}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1 4h3M1 4v6a1 1 0 001 1h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
        Copy
      {/if}
    </button>
  </div>
  <pre><code>{code}</code></pre>
</div>

<style>
  .cb { border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--code-border); margin: 16px 0; }
  .cb-header { display: flex; align-items: center; justify-content: space-between; background: #0a0f1a; padding: 8px 16px; border-bottom: 1px solid var(--code-border); }
  .cb-lang { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #475569; font-weight: 500; }
  .cb-copy { display: flex; align-items: center; gap: 4px; background: transparent; border: none; cursor: pointer; font-size: 11px; font-weight: 600; color: #475569; padding: 3px 6px; border-radius: 4px; font-family: 'Plus Jakarta Sans', sans-serif; transition: color 0.15s, background 0.15s; }
  .cb-copy:hover { color: #94a3b8; background: #1e293b; }
  pre { margin: 0; border-radius: 0; border: none; }
</style>
