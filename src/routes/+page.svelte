<script lang="ts">
	import WordHint from '$lib/WordHint.svelte';
    import Input, { type ValueEntered } from '../lib/input.svelte';
    import type { InputColors } from '../lib/input.svelte';
    
    let visible = true;
    let wordlist = ["funktionieren", "Monitor", "Website", "Computer", "Tastatur"];

    let color: InputColors = 'red';
    let value = '';

    function hideWordHint() {
        setTimeout(() => {
            visible = false;
        }, 1000);
    }

    hideWordHint();

    function checkWord(event: ValueEntered) {
        value = event.detail.text;
        
        visible = true;

        color = wordlist.includes(value) ? "green" : "red";
        wordlist = wordlist.filter(val => val !== value); 

        hideWordHint();
    }

</script>

<h1>Welcome to SvelteKit</h1>
<Input on:valueEntered={checkWord} color={color}/>
<WordHint wordlist={wordlist} visible={visible}/>

<pre class="status">Value: {value}</pre>
