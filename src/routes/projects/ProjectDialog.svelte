<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import * as Form from '$lib/components/ui/form';
	import { formSchema } from './schema';
	import { superForm } from 'sveltekit-superforms';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { DateFormatter, getLocalTimeZone } from '@internationalized/date';
	import { cn } from '$lib/utils.js';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data = {};

	export let dialogOpen;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});

	const { form: formData, enhance } = form;

	$: console.log($formData.project_start_date, $formData.project_end_date);
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="sm:max-w-xl">
		<div class="w-full pb-2.5 pt-8">
			<form method="POST" class="space-y-6" use:enhance>
				<Form.Field {form} name="project_name">
					<Form.Control let:attrs>
						<Form.Label>Project Name</Form.Label>
						<Input
							{...attrs}
							placeholder="ex. project meta.."
							bind:value={$formData.project_name}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<div class="grid w-full grid-cols-2 gap-6">
					<Form.Field {form} name="project_start_date">
						<Form.Control let:attrs>
							<Form.Label>Project Start Date</Form.Label>
							<Popover.Root>
								<Popover.Trigger asChild let:builder>
									<Button
										variant="outline"
										class={cn(
											'w-full justify-start text-left font-normal',
											!$formData.project_start_date && 'text-muted-foreground'
										)}
										builders={[builder]}
									>
										<CalendarIcon class="mr-2 h-4 w-4" />
										{$formData.project_start_date
											? df.format($formData.project_start_date.toDate(getLocalTimeZone()))
											: 'Pick a date'}
									</Button>
								</Popover.Trigger>
								<Popover.Content class="w-auto p-0">
									<Calendar bind:value={$formData.project_start_date} initialFocus />
								</Popover.Content>
							</Popover.Root>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="project_end_date">
						<Form.Control let:attrs>
							<Form.Label>Project End Date</Form.Label>
							<Popover.Root>
								<Popover.Trigger asChild let:builder>
									<Button
										variant="outline"
										class={cn(
											'w-full justify-start text-left font-normal',
											!$formData.project_end_date && 'text-muted-foreground'
										)}
										builders={[builder]}
									>
										<CalendarIcon class="mr-2 h-4 w-4" />
										{$formData.project_end_date
											? df.format($formData.project_end_date.toDate(getLocalTimeZone()))
											: 'Pick a date'}
									</Button>
								</Popover.Trigger>
								<Popover.Content class="w-auto p-0">
									<Calendar bind:value={$formData.project_end_date} initialFocus />
								</Popover.Content>
							</Popover.Root>
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Field {form} name="project_description">
					<Form.Control let:attrs>
						<Form.Label>Project description</Form.Label>
						<Textarea
							{...attrs}
							placeholder="ex. project description.."
							bind:value={$formData.project_description}
						/>
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</form>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
