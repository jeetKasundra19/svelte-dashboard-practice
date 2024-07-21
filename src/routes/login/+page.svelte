<script>
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { formSchema } from '$lib/schema';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data;
	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	function handleOnSubmit(event) {
		event.preventDefault();

		const data = new FormData(event.target);
		const email = data.get('email');

		console.log('Email:', email);
	}
</script>

<main class="layout-wrapper login">
	<div class="flex h-full w-full items-center justify-center overflow-y-auto">
		<form method="POST" on:submit={handleOnSubmit} use:enhance>
			<Form.Field {form} name="email">
				<Form.Control let:attrs>
					<Form.Label>Email</Form.Label>
					<Input {...attrs} bind:value={$formData.email} />
				</Form.Control>
				<Form.Description>This is your public email.</Form.Description>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</form>
	</div>
</main>

<style>
	.layout-wrapper.login {
		@apply relative h-dvh w-full overflow-hidden;
	}
</style>
