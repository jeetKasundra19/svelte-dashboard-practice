<script>
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import Header from './Header.svelte';
	import SideBar from './SideBar.svelte';

	export let breadcrumbList;
</script>

<main class="flex h-dvh w-full items-stretch bg-background">
	<SideBar />
	<div class="flex w-full flex-col">
		<Header {breadcrumbList} />
		<ScrollArea class="h-full w-full overflow-y-auto px-3.5 py-2.5">
			<slot></slot>
		</ScrollArea>
	</div>
</main>
