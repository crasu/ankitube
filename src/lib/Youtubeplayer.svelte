<script>
	import { onMount } from 'svelte';

	export let player;
	export let initialVideoId = '';
	export let display = true;

	const ytPlayerId = 'youtube-player';

	onMount(() => {
		function load() {
			// @ts-ignore
			player = new YT.Player(ytPlayerId, {
				height: '100%',
				width: '100%',
				videoId: initialVideoId,
				playerVars: { autoplay: 1 }
			});
		}

		// @ts-ignore
		if (window.YT?.loaded == 1) {
			load();
		} else {
			// @ts-ignore
			window.onYouTubeIframeAPIReady = load;
		}
	});
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="youtubeplayer {display ? '' : 'hidden'}">
	<div id={ytPlayerId} />
</div>

<style>
	.youtubeplayer {
		width: 300px;
		height: 400px;
		margin: auto;
		margin-top: 25px;
		width: 50%;
	}
	.hidden {
		display: none;
	}
</style>
