<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    label?: string
    children: Snippet
  }

  let { label = 'Live preview', children }: Props = $props()
</script>

<div class="preview">
  <div class="preview-label">{label}</div>
  <div class="preview-body">{@render children()}</div>
</div>

<style>
  .preview { margin: 20px 0; }
  .preview-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .preview-body {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 20px 24px;
    box-shadow: var(--shadow-sm);
    line-height: 2;
    overflow-x: auto;
  }
</style>
