<script context="module">
//  export async function preload() {


//		const res = await this.fetch(`https://api.chucknorris.io/jokes/random`);
//		const article = await res.json();

//		return { datas: article };
//	}
</script>


<script>
import Joke from '../components/Joke.svelte';
//export let datas;
//const staticRend = "static";
</script>

<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about science</h1>




<Joke category="science" />
