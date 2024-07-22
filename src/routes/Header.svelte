<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Sun from 'lucide-svelte/icons/sun';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import Search from 'lucide-svelte/icons/search';
	import Moon from 'lucide-svelte/icons/moon';
	import { ModeWatcher } from 'mode-watcher';
	import { resetMode, setMode } from 'mode-watcher';
</script>

<header class="header">
	<div></div>
	<ul></ul>
	<ul class="flex items-stretch gap-0.5 rounded-lg bg-background px-1 py-0.5">
		<li class="rounded-lg">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" size="icon">
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
		<li class="rounded-lg">
			<Button variant="link" class="flex max-h-10 max-w-10 items-center justify-center border-none">
				<Avatar.Root class="flex items-center justify-center rounded-lg">
					<Avatar.Image
						src="https://github.com/shadcn.png"
						alt="@shadcn"
						class="max-h-9 max-w-9 rounded-lg"
					/>
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
			</Button>
		</li>
	</ul>
	<ModeWatcher />
</header>

<style>
	.header {
		@apply flex w-full items-center justify-between pb-2;
	}
</style>
