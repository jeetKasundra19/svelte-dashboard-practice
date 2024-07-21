<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import Sun from 'lucide-svelte/icons/sun';
	import Search from 'lucide-svelte/icons/search';
	import Moon from 'lucide-svelte/icons/moon';
	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	export let breadcrumbList = [
		{
			breadcrumb_item: 'Dashboard',
			breadcrumb_link: '/'
		},
		{
			breadcrumb_item: 'Layout'
		}
	];
</script>

<header class="header">
	<ul class="space-x-1.5">
		<li>
			<Breadcrumb.Root>
				<Breadcrumb.List>
					{#each breadcrumbList as item}
						<Breadcrumb.Item>
							{#if item.breadcrumb_link}
								<div class="flex items-center gap-2.5">
									<Breadcrumb.Link href={item.breadcrumb_link}
										>{item.breadcrumb_item}</Breadcrumb.Link
									>
									<Breadcrumb.Separator />
								</div>
							{:else}
								<Breadcrumb.Page>{item.breadcrumb_item}</Breadcrumb.Page>
							{/if}
						</Breadcrumb.Item>
					{/each}
				</Breadcrumb.List>
			</Breadcrumb.Root>
		</li>
	</ul>
	<ul class="flex items-center space-x-2.5">
		<li>
			<Button variant="outline" size="icon" class="btn-size">
				<Search class="h-4 w-4" />
			</Button>
		</li>
		<li>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" size="icon" class="btn-size">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</li>
	</ul>
	<ModeWatcher />
</header>

<style>
	.header {
		@apply flex w-full items-center justify-between border-b border-solid border-border px-3.5 py-1.5;
	}

	.btn-size {
		@apply max-h-8 max-w-8;
	}
</style>
