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
//const envStatic = false;
const envStatic = process.env.static;
console.log(envStatic)
</script>




<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Jokes about career</h1>

{#if envStatic}
{datas.value}
{:else}
<Joke category="career" />
{/if}
