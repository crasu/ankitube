<script lang="ts">
    import WordHint from './WordHint.svelte';
    import WordInput, { type ValueEntered } from './WordInput.svelte';
    import type { InputColors } from './WordInput.svelte';
    import Youtubeplayer from './Youtubeplayer.svelte';
    import Header from '$lib/Header.svelte';
    import { loadWordlist, loadVideoId } from '$lib/localStorage';
    import { onMount } from 'svelte';

    let youtubeId = '';

    let player: any; // eslint-disable-line

    let renderWordHint = true;
    let displayVideo = false;
    let wordlist: string[] = [];
    let videoOffset = 0;
    const videoAdvance = 5;

    let color: InputColors = 'red';

    onMount(() => {
        wordlist = loadWordlist();
        youtubeId = loadVideoId();
    });

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
            videoId: youtubeId,
            startSeconds: videoOffset,
            ...(videoAdvance !== 0 && { endSeconds: videoOffset + videoAdvance }),
            allowSeekAhead: true
        });
    }

    function checkWord(event: ValueEntered) {
        let value = event.detail.text;
        let correct = wordlist.includes(value);

        if (wordlist.length === 0 || (wordlist.length === 1 && correct)) {
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
