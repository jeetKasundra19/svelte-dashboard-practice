<script>
	import Header from './Header.svelte';
</script>

<main class="layout-wrapper">
	<Header />
	<div class="h-full w-full rounded-xl border border-solid border-border p-2.5 bg-background overflow-y-auto">
		<slot></slot>
	</div>
</main>

<style>
	.layout-wrapper {
		@apply flex h-dvh w-full flex-col overflow-hidden bg-accent p-2;
	}
</style>
