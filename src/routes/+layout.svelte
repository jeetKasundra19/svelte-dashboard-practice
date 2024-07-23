<script>
	import { onMount } from 'svelte';
	import { session } from '$stores';
	import { goto } from '$app/navigation';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	onMount(() => {
		// if (!$session.loggedIn) {
		// 	goto('/login');
		// }
	});
</script>

<ModeWatcher />
<slot></slot>
