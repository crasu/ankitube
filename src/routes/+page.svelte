<script lang="ts">
	import WordHint from '$lib/WordHint.svelte';
	import WordInput, { type ValueEntered } from '../lib/WordInput.svelte';
	import type { InputColors } from '../lib/WordInput.svelte';
	import Youtubeplayer from '../lib/Youtubeplayer.svelte';
	let player: any;

	let renderWordHint = true;
    let displayVideo = false;
	let wordlist = ['funktionieren', 'Monitor', 'Website', 'Computer', 'Tastatur'];
    let videoOffset = 0;
    const videoAdvance = 30;

	let color: InputColors = 'red';

	function hideWordHintAfterTimeout() {
		setTimeout(() => {
			renderWordHint = false;
		}, 1000);
	}

    function hideVideoAfterTimeout() {
        setTimeout(() => {
            displayVideo = false;
        }, videoAdvance * 1000 + 1000);   
    }

    function play(videooffset: number) {
        player.loadVideoById({
            videoId: "dQw4w9WgXcQ", 
            startSeconds: videooffset, 
            endSeconds: videooffset + 5, 
            allowSeekAhead: true }
        );
    }

	hideWordHintAfterTimeout();

	function checkWord(event: ValueEntered) {
		let value = event.detail.text;
		renderWordHint = true;
        
        let correct = wordlist.includes(value);

        if (correct) {
            color = 'green';
            wordlist = wordlist.filter((val) => val !== value);

            displayVideo = true;
            play(videoOffset);

            videoOffset += 5;

            hideVideoAfterTimeout();
        } else {
            color = 'red';
        }

		hideWordHintAfterTimeout();
	}
</script>

<h1>Welcome to SvelteKit</h1>
<WordInput on:valueEntered={checkWord} {color} />
{#if renderWordHint}
    <WordHint {wordlist} />
{/if}

<Youtubeplayer bind:player display={displayVideo}/>