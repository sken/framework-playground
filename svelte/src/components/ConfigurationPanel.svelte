<script>
    export let selectedLineCount;
    export let selectedRowCount;
    export let lineCountOptions;
    export let lineRowOptions;
</script>
<div class="ml-3 absolute right-10 top-10 grid grid-cols-1 gap-6 bg-white p-5 border-2">
    <label class="block"><span class="text-gray-700">Row count</span><select class="block w-full mt-1" bind:value={selectedRowCount}>
        {#each lineRowOptions as number}
            <option value={number}>
                {number.text}
            </option>
        {/each}
    </select></label>


    <label class="block"><span class="text-gray-700">Line count</span>
        <select class="block w-full mt-1" bind:value={selectedLineCount}>
            {#each lineCountOptions as number}
                <option value={number}>
                    {number.text}
                </option>
            {/each}
        </select></label>

</div>
