<script lang="ts">
    import ConfigurationPanel from '../components/ConfigurationPanel.svelte'
    import Grid from "../components/Grid.svelte";

    let defaultLineCount = 10;
    let defaultRowCount = 10;

    let selectedLineCount;
    let selectedRowCount;

    $: lineCount = selectedLineCount ? selectedLineCount.id : defaultLineCount;
    $: rowCount = selectedRowCount ? selectedRowCount.id : defaultRowCount;

    let lineCountOptions = [
        {id: 10, text: 10},
        {id: 15, text: 15},
        {id: 20, text: 20},
        {id: 50, text: 50},
    ];

    let lineRowOptions = [
        {id: 10, text: 10},
        {id: 15, text: 15},
        {id: 20, text: 20},
        {id: 50, text: 50},
    ];
</script>
<style lang="scss">

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
<ConfigurationPanel
        bind:selectedLineCount={selectedLineCount}
        bind:selectedRowCount={selectedRowCount}
        lineCountOptions={lineCountOptions}
        lineRowOptions={lineRowOptions}/>

<Grid
        rowCount={rowCount}
        lineCount={lineCount}/>

