<script lang="ts">
    import Header from '$lib/Header.svelte';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import { onMount } from 'svelte';
    import { loadWordlist, loadVideoLink } from '$lib/localStorage';

    let videoLink = '';
    let wordlist = '';

    onMount(() => {
        wordlist = loadWordlist().join('\n');
        videoLink = loadVideoLink();
    });

    function updateWordlist(event: CustomEvent) {
        let wlstring = (event.target as HTMLInputElement).value;
        let wl = wlstring.split('\n').filter((word: string) => word.trim() !== '');

        localStorage.setItem('wordlist', JSON.stringify(wl));
    }

    function updateYoutubeLink(event: CustomEvent) {
        videoLink = (event.target as HTMLInputElement).value;

        localStorage.setItem('videoLink', videoLink);
    }
</script>

<Header>Ankitube</Header>

<div class="margins">
    <Textfield
        style="width: 100%; height: 10em"
        helperLine$style="width: 100%; margin-bottom: 1em;"
        textarea
        value={wordlist}
        on:input={updateWordlist}
        label="Wortliste"
    >
        <HelperText slot="helper">Zu lernende Wörter</HelperText>
    </Textfield>
    <Textfield
        variant="outlined"
        style="width: 100%;"
        value={videoLink}
        on:input={updateYoutubeLink}
        label="Video Link"
    >
        <HelperText slot="helper">Link zum Video</HelperText>
    </Textfield>
</div>
