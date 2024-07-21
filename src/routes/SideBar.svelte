<script>
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import Mail from 'lucide-svelte/icons/mail';
	import { tick } from 'svelte';
	import { cn } from '$lib/utils.js';

	const frameworks = [
		{
			value: 'sveltekit',
			label: 'SvelteKit'
		},
		{
			value: 'next.js',
			label: 'Next.js'
		},
		{
			value: 'nuxt.js',
			label: 'Nuxt.js'
		},
		{
			value: 'remix',
			label: 'Remix'
		},
		{
			value: 'astro',
			label: 'Astro'
		}
	];

	let open = false;
	let value = '';

	$: selectedValue = frameworks.find((f) => f.value === value)?.label ?? 'Select a framework...';

	function closeAndFocusTrigger(triggerId) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	const sidebarLinkList = [
		{
			group_name: 'Personal',
			group_list: [
				{
					id: '#ad92x',
					link_name: 'Home',
					link: '/'
				},
				{
					id: '#qpc0a',
					link_name: 'Profile',
					link: '/profile'
				}
			]
		},
		{
			group_name: 'Business',
			group_list: [
				{
					id: '#s65q0',
					link_name: 'Dashboard',
					link: '/'
				},
				{
					id: '#8qsx0',
					link_name: 'Settings',
					link: '/settings'
				}
			]
		}
	];
</script>

<aside class="sidebar">
	<div class="w-full space-y-8">
		<Popover.Root bind:open let:ids>
			<Popover.Trigger asChild let:builder>
				<Button
					builders={[builder]}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					class="w-full justify-between"
				>
					{selectedValue}
					<ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</Popover.Trigger>
			<Popover.Content class="mt-1 w-full max-w-[230px] p-0">
				<Command.Root>
					<Command.Empty>No framework found.</Command.Empty>
					<Command.Group>
						{#each frameworks as framework}
							<Command.Item
								value={framework.value}
								onSelect={(currentValue) => {
									value = currentValue;
									closeAndFocusTrigger(ids.trigger);
								}}
							>
								<Check
									class={cn('mr-2 h-4 w-4', value !== framework.value && 'text-transparent')}
								/>
								{framework.label}
							</Command.Item>
						{/each}
					</Command.Group>
				</Command.Root>
			</Popover.Content>
		</Popover.Root>
		<ul class="w-full space-y-5">
			{#each sidebarLinkList as item}
				<li class="space-y-1.5">
					<p class="text-sm">{item.group_name}</p>
					<ul class="space-y-1">
						{#each item.group_list as link}
							<li class="block w-full">
								<Button class="w-full justify-start" variant="outline">
									<Mail class="mr-2 h-4 w-4" />
									{link.link_name}
								</Button>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
	<div></div>
</aside>

<style>
	.sidebar {
		@apply flex h-dvh w-full max-w-64 flex-col justify-between border border-r border-border px-2.5 py-3.5;
	}
</style>
