<script lang="ts">
	import WordHint from '$lib/WordHint.svelte';
	import WordInput, { type ValueEntered } from '$lib/WordInput.svelte';
	import type { InputColors } from '$lib/WordInput.svelte';
	import Youtubeplayer from '$lib/Youtubeplayer.svelte';
	import Header from '$lib/Header.svelte';

	let player: any;

	let renderWordHint = true;
	let displayVideo = false;
	let wordlist = ['funktionieren', 'Monitor', 'Website', 'Computer', 'Tastatur'];
	let videoOffset = 0;
	const videoAdvance = 5;

	let color: InputColors = 'red';

	showWordHint();

	function showWordHint() {
		renderWordHint = true;

		setTimeout(() => {
			renderWordHint = false;
		}, 1000);
	}

	function showVideo(stopTime = 0) {
		displayVideo = true;

		if (stopTime !== 0) {
			setTimeout(() => {
				player.stopVideo();
				displayVideo = false;
			}, stopTime * 1000);
		}
	}

	function play(videoOffset: number, videoAdvance = 0) {
		player.loadVideoById({
			videoId: 't7G3dyttT3Y',
			startSeconds: videoOffset,
			...(videoAdvance !== 0 && { endSeconds: videoOffset + videoAdvance }),
			allowSeekAhead: true
		});
	}

	function checkWord(event: ValueEntered) {
		let value = event.detail.text;
		let correct = wordlist.includes(value);

		if (wordlist.length === 0 || wordlist.length === 1 && correct) {
			wordlist = [];
            play(videoOffset);
            showVideo();
			return;
		}

		if (correct) {
			color = 'green';
			wordlist = wordlist.filter((val) => val !== value);

			play(videoOffset);

			videoOffset += videoAdvance;

			showVideo(videoAdvance);
		} else {
			color = 'red';
			showWordHint();
		}
	}
</script>

<Header>Ankitube</Header>
<WordInput on:valueEntered={checkWord} {color} />
{#if renderWordHint}
	<WordHint {wordlist} />
{/if}

<Youtubeplayer bind:player display={displayVideo} />
