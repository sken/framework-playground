<script>
    export let height = 0;
    export let lineColor = '#666';
    export let x;
    export let y;
    $: lineCssStyles = `border-bottom: 1px solid ${lineColor}; height: ${height}vh; line-height: ${height}vh`;
</script>
<div style="{lineCssStyles}" class="text-center"><span class="text-gray-300 text-xs">x:{x} y:{y}</span></div>

