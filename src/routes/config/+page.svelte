<script>
    import Header from '$lib/Header.svelte';
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    let wordlist = 'Monitor\nComputer';
    let videoLink = 'https://www.youtube.com/watch?v=G__fWfF4wYM';
</script>

<Header>Ankitube</Header>

<div class="margins">
    <Textfield
      style="width: 100%; height: 10em"
      helperLine$style="width: 100%; margin-bottom: 1em;"
      textarea
      bind:value={wordlist}
      label="Wortliste"
    >
      <HelperText slot="helper">Zu lernende Wörter</HelperText>
    </Textfield>
    <Textfield variant="outlined" style="width: 100%;" bind:value={videoLink} label="Video Link">
        <HelperText slot="helper">Link zum Video</HelperText>
    </Textfield>
</div>

  