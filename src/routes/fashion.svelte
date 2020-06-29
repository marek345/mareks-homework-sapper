<script context="module">
  export async function preload() {
    if(process.env.SAPPER_APP_STATIC === "static"){

	     const res = await this.fetch(`https://api.chucknorris.io/jokes/random?category=fashion`);
	      const article = await res.json();

	       return { datas: article };
      }

	}
</script>

<script>

export let datas;

import { onMount } from "svelte";
const apiURL = "https://api.chucknorris.io/jokes/random?category=fashion";
let data = [];


onMount(async function() {
    if(process.env.SAPPER_APP_STATIC === "static")
    {}
    else {const response = await fetch(apiURL);
    data = await response.json();
    }

});
