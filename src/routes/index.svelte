<script context="module">
  export async function preload() {
    if(process.env.SAPPER_APP_STATIC === "static"){

	     const res = await this.fetch(`https://api.chucknorris.io/jokes/random?category=career`);
	      const article = await res.json();

	       return { datas: article };
      }
      
	}
</script>

<script>

export let datas;

import { onMount } from "svelte";
const apiURL = "https://api.chucknorris.io/jokes/random?category=career";
let data = [];


onMount(async function() {
    if(process.env.SAPPER_APP_STATIC === "static")
    {}
    else {const response = await fetch(apiURL);
    data = await response.json();
    }

});


</script>




<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about career</h1>


{#if process.env.SAPPER_APP_STATIC === "static"}
{datas.value}
{:else}
<p>{data.value}</p>
{/if}
