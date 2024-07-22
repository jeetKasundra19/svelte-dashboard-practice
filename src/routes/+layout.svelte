<script>
	import { onMount } from 'svelte';
	import { session } from '$stores';
	import { goto } from '$app/navigation';
	import '../app.css';

	onMount(() => {
		// if (!$session.loggedIn) {
		// 	goto('/login');
		// }
	});
</script>

<slot></slot>
