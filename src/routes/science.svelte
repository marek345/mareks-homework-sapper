<script context="module">
  export async function preload() {


		const res = await this.fetch(`https://api.chucknorris.io/jokes/random`);
		const article = await res.json();

		return { datas: article };
	}
</script>


<script>
export let datas;
</script>

<svelte:head>
	<title>Random static jokes</title>
</svelte:head>

<h1>About this site</h1>



{datas.value}

{process.env.static}
