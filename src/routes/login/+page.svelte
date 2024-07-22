<script>
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { goto } from '$app/navigation';
	import { session } from '$stores';

	export let data;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	let loading = false;

	const { form: formData, enhance } = form;

	async function handleOnSubmit(event) {
		loading = true;
		event.preventDefault();

		const data = new FormData(event.target);
		const email = data.get('email');
		const password = data.get('password');

		const isLoggedIn = await fakeLogin(email, password);

		if (isLoggedIn) {
			loading = false;
			session.set({ loggedIn: true });
			goto('/');
		} else {
			loading = false;
			alert('Login failed. Please try again.');
		}
	}

	async function fakeLogin(email, password) {
		return new Promise((resolve) =>
			setTimeout(() => resolve(email === 'user@example.com' && password === 'password'), 500)
		);
	}
</script>

<main class="layout-wrapper login">
	<div class="flex h-full w-full items-center justify-center overflow-y-auto">
		<form class="w-full max-w-sm space-y-3.5" method="POST" on:submit={handleOnSubmit} use:enhance>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label class="block cursor-pointer">Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="password">
				<Form.Control let:attrs>
					<Form.Label class="block cursor-pointer">Password</Form.Label>
					<Input {...attrs} bind:value={$formData.password} type="password" />
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="mt-6 w-full" disabled={loading}>
				{#if loading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				{loading ? 'Please wait...' : 'Submit'}
			</Form.Button>
		</form>
	</div>
</main>

<style>
	.layout-wrapper.login {
		@apply relative h-dvh w-full overflow-hidden;
	}
</style>
