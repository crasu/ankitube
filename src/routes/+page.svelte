<script lang="ts">
    import Input from '../lib/input.svelte';
    let value = '';
</script>

<h1>Welcome to SvelteKit</h1>
<Input bind:value={value}/>

<pre class="status">Value: {value}</pre>
