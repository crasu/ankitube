<script lang="ts">
	import Button, { Label } from '@smui/button';
	import { base } from '$app/paths';
</script>

<div class="align">
	<a href="{base}/"><h1 class="header"><slot /></h1></a>
	<Button color="secondary" href="{base}/config/" class="button">
		<Label>Config</Label>
	</Button>
</div>

<style>
	a {
		color: inherit;
		text-decoration: none;
	}
	.header {
		size: 1.5rem;
		font-weight: 300;
		letter-spacing: -0.015625em;
		font-family: 'Roboto', sans-serif;
		display: inline-block;
	}
	.align {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
