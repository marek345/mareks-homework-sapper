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
const staticRend = "dynamic";
</script>


<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about fashion</h1>


{#if staticRend === "static"}
{datas.value}
{:else}
<Joke category="fashion" />
{/if}
