<script>
    import Nested from "./Nested.svelte";

    let numbers = [];

    function addNumber() {
        numbers[numbers.length] = numbers.length + 1
    }
</script>

<button on:click={addNumber}>
    Add a number to the array!~
</button>

<p>{numbers}</p>

<Nested exportedValue="override!"></Nested>