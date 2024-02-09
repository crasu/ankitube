<script lang="ts">
    import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/common';

	export let value = '';
    let currentValue = value;

	function handleKeyDown(event: CustomEvent | KeyboardEvent) {
		event = event as KeyboardEvent;
		if (event.key === 'Enter') {
			value = currentValue;
		}
	}
</script>

<div class="solo-demo-container solo-container">
	<Paper class="solo-paper" elevation={6}>
		<Icon class="material-icons">create</Icon>
		<Input bind:value={currentValue} on:keydown={handleKeyDown} placeholder="Wort" class="solo-input" />
	</Paper>
    <Fab on:click={() => value = currentValue} disabled={value === ''} color="primary" class="solo-fab">
        <Icon class="material-icons">check</Icon>
    </Fab>
</div>


<style>
	.solo-demo-container {
		padding: 36px 18px;
		background-color: var(--mdc-theme-background, #f8f8f8);
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
	}

	.solo-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 0 12px;
		height: 48px;
	}
	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}
	* :global(.solo-input) {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface, #000);
	}
	* :global(.solo-input::placeholder) {
		color: var(--mdc-theme-on-surface, #000);
		opacity: 0.6;
	}
	* :global(.solo-fab) {
		flex-shrink: 0;
	}
</style>
