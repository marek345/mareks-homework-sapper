<script context="module">
  export async function preload() {


		const res = await this.fetch(`https://api.chucknorris.io/jokes/random`);
		const article = await res.json();

		return { datas: article };
	}
</script>

<script>
import Joke from '../components/Joke.svelte';
export let datas;



</script>




<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about career</h1>





{#if process.env.SAPPER_APP_STATIC === "static"}
{datas.value}
{:else}
<Joke category="career" />
{/if}
