<script>
	import ChevronRight from 'lucide-svelte/icons/chevron-right';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { Button } from '$lib/components/ui/button/index.js';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { page } from '$app/stores';
	import LayoutWrapper from '../LayoutWrapper.svelte';
	import { onMount } from 'svelte';

	$: url = $page.url;

	$: fromDate = url.searchParams.get('from');
	$: toDate = url.searchParams.get('to');

	const df = new DateFormatter('en-US', {
		dateStyle: 'medium'
	});

	let value = {
		start: new CalendarDate(2022, 1, 20),
		end: new CalendarDate(2022, 1, 24)
	};

	let startValue = undefined;

	onMount(() => {
		if (fromDate) {
			const [fromYear, fromMonth, fromDay] = fromDate.split('-').map(Number);
			value.start = new CalendarDate(fromYear, fromMonth, fromDay);
		}

		if (toDate) {
			const [toYear, toMonth, toDay] = toDate.split('-').map(Number);
			value.end = new CalendarDate(toYear, toMonth, toDay);
		}
	});
</script>

<LayoutWrapper>
	<div class="space-y-8 px-2 pt-3">
		<div class="space-y-5">
			<div class="flex w-full items-center justify-between">
				<h2 class="text-3xl">May 5 - May 11</h2>
				<div class="flex items-stretch gap-2">
					<Button variant="outline" size="icon">
						<ChevronLeft class="h-4 w-4" />
					</Button>
					<Button variant="outline" size="icon">
						<ChevronRight class="h-4 w-4" />
					</Button>
				</div>
			</div>
			<div class="flex w-full items-center justify-between">
				<div></div>
				<div class="flex items-stretch gap-2">
					<Popover.Root openFocus>
						<Popover.Trigger asChild let:builder>
							<Button
								variant="outline"
								class={cn(
									'w-60 justify-start text-left font-normal',
									!value && 'text-muted-foreground'
								)}
								builders={[builder]}
							>
								<CalendarIcon class="mr-2 h-4 w-4" />
								{#if value && value.start}
									{#if value.end}
										{df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
											value.end.toDate(getLocalTimeZone())
										)}
									{:else}
										{df.format(value.start.toDate(getLocalTimeZone()))}
									{/if}
								{:else if startValue}
									{df.format(startValue.toDate(getLocalTimeZone()))}
								{:else}
									Pick a date
								{/if}
							</Button>
						</Popover.Trigger>
						<Popover.Content class="mt-1.5 w-auto p-0" align="start">
							<RangeCalendar
								bind:value
								bind:startValue
								initialFocus
								numberOfMonths={2}
								placeholder={value?.start}
							/>
						</Popover.Content>
					</Popover.Root>
                    
				</div>
			</div>
		</div>
	</div>
</LayoutWrapper>
