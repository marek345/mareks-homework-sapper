<script>
	let promise = getChuck();

	async function getChuck() {
		const res = await fetch(`https://api.chucknorris.io/jokes/random`);
		const text = await res.json();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	function handleClick() {
		promise = getChuck();
	}
</script>

<button on:click={handleClick}>
	Get new Chuck Norris joke
</button>

{#await promise}
	<p>...waiting</p>
{:then joke}
	<p>{joke.value}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
