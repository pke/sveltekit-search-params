<script>
  import { queryParam, ssp } from "../lib";
  import { page } from "$app/stores";
  import "../assets/fonts.css";
  
  const l = queryParam("l", ssp.number(12))
  $: ({ password, length } = $page.data)
</script>

<svelte:head>
  <title>sveltekit-search-params</title>
</svelte:head>

<span>{password}</span>

<form>
  <label for="l">Length ({$l}):</label><br>
  <input type="number" bind:value={$l} name="l" id="l" size="4" min="4"/><br>
</form>
<style>

  :global(:root) {
    overflow: hidden;
  }
  :global(body) {
    overflow: hidden;
    margin: 0;
    background: #222;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  a {
    color: white;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }
  h1,
  h2,
  h3 {
    text-align: center;
    max-width: 100vw;
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1rem;
    font-weight: normal;
  }
  h3 {
    font-size: 0.8rem;
    font-weight: normal;
  }
  .wrapper {
    width: 60rem;
    margin: auto;
    padding: 1rem;
  }
  .content {
    background-color: white;
    width: 100%;
    height: 100%;
    padding: 2rem;
    color: black;
  }
  .npm-wrapper {
    display: grid;
  }
  .npm {
    display: inline-block;
    background: #444;
    margin: auto;
    padding: 0.5rem;
    border-radius: 0.25rem;
    user-select: all;
  }
</style>
