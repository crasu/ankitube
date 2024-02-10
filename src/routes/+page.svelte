<script lang="ts">
	import WordHint from '$lib/WordHint.svelte';
	import WordInput, { type ValueEntered } from '../lib/WordInput.svelte';
	import type { InputColors } from '../lib/WordInput.svelte';
	import Youtubeplayer from '../lib/Youtubeplayer.svelte';
    import Header from '../lib/Header.svelte';
    
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

    function showVideo() {
        displayVideo = true;

        setTimeout(() => {
            player.stopVideo();
            displayVideo = false;
        }, videoAdvance * 1000);   
    }

    function play(videoOffset: number) {
        player.loadVideoById({
            videoId: "t7G3dyttT3Y", 
            startSeconds: videoOffset, 
            endSeconds: videoOffset + videoAdvance, 
            allowSeekAhead: true }
        );
    }

	function checkWord(event: ValueEntered) {
		let value = event.detail.text;
        let correct = wordlist.includes(value);

        if (correct) {
            color = 'green';
            wordlist = wordlist.filter((val) => val !== value);

            play(videoOffset);

            videoOffset += videoAdvance;

            showVideo();
        } else {
            color = 'red';
        }

		showWordHint();
	}
</script>

<Header>Ankitube</Header>
<WordInput on:valueEntered={checkWord} {color} />
{#if renderWordHint}
    <WordHint {wordlist} />
{/if}

<Youtubeplayer bind:player display={displayVideo}/>
  