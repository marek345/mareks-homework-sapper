<script>
    import { onMount } from "svelte";
    export let category = "random";
    const apiURL = "https://api.chucknorris.io/jokes/random?category="+category;
    let data = [];


    onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
    });

</script>


<p>{data.value}</p>
