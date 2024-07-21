<script>
	import '../app.css';
	import Header from './Header.svelte';
	import SideBar from './SideBar.svelte';
</script>

<div class="flex h-dvh w-full items-stretch bg-background">
	<SideBar />
	<div class="flex w-full flex-col">
		<Header />
	</div>
</div>
