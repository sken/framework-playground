<script lang="ts">
    let defaultLineCount = 10;
    let divLineCount = 25;
    let selectedLineCount;


    $: lineCssStyles = `height: ${100 / lineCount}vh`;

    $: lineCount = selectedLineCount ? selectedLineCount.id : defaultLineCount;
    let lineCountOptions = [
        {id: 10, text: 10},
        {id: 15, text: 15},
        {id: 20, text: 20},
        {id: 50, text: 50},
    ];
    $: dividerCssStyles = `border-right: 1px solid red;width: ${100 / divLineCount}vw; float:left;`;
</script>
<style>
    select {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    :global(*) {
        box-sizing: border-box;
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }

    div {
        border-bottom: 1px solid #666;
    }
</style>

<select bind:value={selectedLineCount}>
    {#each lineCountOptions as number}
        <option value={number}>
            {number.text}
        </option>
    {/each}
</select>

{#each {length: divLineCount} as _, i}
<div style="{dividerCssStyles}">
    {#if selectedLineCount}
        {#each {length: lineCount} as _, i}
            <div style="{lineCssStyles}"></div>
        {/each}
    {/if}
</div>
{/each}
