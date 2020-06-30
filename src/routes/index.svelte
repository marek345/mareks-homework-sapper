<script context="module">
//  export async function preload() {
//    if(process.env.SAPPER_APP_STATIC === "static"){
//	     const res = await this.fetch(`career.json`);
//	      const article = await res.json();

//	       return { datas: article };
//      }
//	}
export async function preload({ params, query }) {
    return this.fetch(`career.json`).then(r => r.json()).then(posts => {
       return { posts };
    });
}


</script>

<script>

//export let datas;
export let posts;
import { onMount } from "svelte";
const apiURL = "https://api.chucknorris.io/jokes/random?category=career";
let data = [];


//onMount(async function() {
//    if(process.env.SAPPER_APP_STATIC === "dynamic")
//    {const response = await fetch(apiURL);
//    data = await response.json();
//    }

// });


</script>




<svelte:head>
	<title>Marek's homework</title>
</svelte:head>

<h1>Jokes about career</h1>


{posts.value}
