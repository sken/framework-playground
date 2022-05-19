<script>
    export let width = 0;
    export let lineColor = '#666';
    $: cssStyles = `border-right: 1px solid ${lineColor};width: ${width}vw; float:left;`;
</script>
<div style="{cssStyles}">
    <slot></slot>
</div>

