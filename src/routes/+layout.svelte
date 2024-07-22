<script>
	import { session } from '$stores';
	import { goto } from '$app/navigation';
	import '../app.css';

	if (!$session.loggedIn) {
		goto('/login');
	}
</script>

<slot></slot>
