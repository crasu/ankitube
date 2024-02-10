<script lang="ts">
	import List, { Item, Separator, Text } from '@smui/list';
	import Paper, { Content, Title } from '@smui/paper';
	export let wordlist: string[] = [];
</script>

<div>
	<Paper class="word-list">
		<Title>Wortliste</Title>
		<Content>
			<List>
				{#each wordlist as word}
					<Item><Text>{word}</Text></Item>
					<Separator />
				{/each}
			</List>
		</Content>
	</Paper>
</div>

<style>
	* :global(.word-list) {
		max-width: 300px;
		margin: auto;
		margin-top: 25px;
		width: 50%;
	}
</style>
