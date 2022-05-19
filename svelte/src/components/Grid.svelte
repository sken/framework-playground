<script>
    import Row from "./Row.svelte";
    import Line from "./Line.svelte";

    export let rowCount;
    export let lineCount;
    let color = "#666";
</script>

{#each {length: rowCount} as _, x}
    <Row width={100 / rowCount} lineColor={color}>
        {#each {length: lineCount} as _, y}
            <Line height={100 / lineCount} lineColor={color} x={x} y={y}></Line>
        {/each}
    </Row>
{/each}
