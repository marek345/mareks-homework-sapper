<script context="module">

export async function preload({ params, query }) {
   if(process.env.SAPPER_APP_RENDERING === "static"){
     return this.fetch(`science.json`).then(r => r.json()).then(posts => {
       return { posts };
     });
   }
    if(process.env.SAPPER_APP_RENDERING === "semi-static"){
      return this.fetch(`https://api.chucknorris.io/jokes/random?category=science`).then(r => r.json()).then(posts => {
        return { posts };
      });
    }
}
</script>

<script>
export let posts;
import { onMount } from "svelte";
let dynamicPosts = [];

onMount(async function() {
    if(process.env.SAPPER_APP_RENDERING === "dynamic")
    {const response = await fetch(`https://api.chucknorris.io/jokes/random?category=science`);
    dynamicPosts = await response.json();
    }
 });

</script>

<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about career</h1>

{#if (process.env.SAPPER_APP_RENDERING === "static")}
{posts.value}
{:else if (process.env.SAPPER_APP_RENDERING === "semi-static")}
{posts.value}
{:else}
{dynamicPosts.value}
{/if}
