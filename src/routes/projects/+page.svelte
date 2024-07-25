<script>
	import LayoutWrapper from '../LayoutWrapper.svelte';
	import ProjectDialog from './ProjectDialog.svelte';
	import MoveUpRight from 'lucide-svelte/icons/move-up-right';
	import Plus from 'lucide-svelte/icons/plus';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group/index.js';
	import * as Resizable from '$lib/components/ui/resizable';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import OnTaskBox from './OnTaskBox.svelte';
	import ProjectList from './ProjectList.svelte';

	const onGoingTaskFilter = [
		{
			id: '1',
			filter_name: 'today',
			icon: null
		},
		{
			id: '2',
			filter_name: 'tomorrow',
			icon: null
		},
		{
			id: '3',
			filter_name: 'on going',
			count: '2',
			icon: null
		},
		{
			id: '4',
			filter_name: 'Today Pending',
			count: '4',
			icon: null
		},
		{
			id: '5',
			filter_name: 'complete',
			count: '8',
			icon: null
		}
	];

	const goingTaskList = [
		{
			id: '1',
			project_title: 'Redesign Login Page',
			project_description:
				'A complete overhaul of the login page for a more user-friendly experience.',
			status: 'In Progress',
			project_tag: ['login', 'important', 'design'],
			end_time: '2024-08-15'
		},
		{
			id: '2',
			project_title: 'Marketing Campaign',
			project_description: 'Launch a marketing campaign for the new product release.',
			status: 'Not Started',
			project_tag: ['marketing', 'urgent'],
			end_time: '2024-09-01'
		},
		{
			id: '3',
			project_title: 'Backend API Development',
			project_description: 'Develop the backend APIs for the new mobile application.',
			status: 'In Progress',
			project_tag: ['backend', 'development', 'API'],
			end_time: '2024-08-20'
		},
		{
			id: '4',
			project_title: 'UI/UX Improvement',
			project_description: 'Improve the UI/UX of the dashboard to enhance user experience.',
			status: 'In Progress',
			project_tag: ['UI', 'UX', 'design'],
			end_time: '2024-08-30'
		},
		{
			id: '5',
			project_title: 'Database Migration',
			project_description: 'Migrate the database to a more scalable solution.',
			status: 'Completed',
			project_tag: ['database', 'migration'],
			end_time: '2024-07-20'
		},
		{
			id: '6',
			project_title: 'Customer Feedback Analysis',
			project_description: 'Analyze the feedback from customers to identify areas of improvement.',
			status: 'Not Started',
			project_tag: ['customer', 'feedback', 'analysis'],
			end_time: '2024-08-25'
		},
		{
			id: '7',
			project_title: 'Mobile App Testing',
			project_description: 'Conduct thorough testing of the new mobile application.',
			status: 'In Progress',
			project_tag: ['testing', 'mobile', 'QA'],
			end_time: '2024-08-18'
		},
		{
			id: '8',
			project_title: 'SEO Optimization',
			project_description: 'Optimize the website for better search engine rankings.',
			status: 'Not Started',
			project_tag: ['SEO', 'optimization', 'marketing'],
			end_time: '2024-09-10'
		},
		{
			id: '9',
			project_title: 'Content Creation',
			project_description: 'Create new content for the blog and social media channels.',
			status: 'In Progress',
			project_tag: ['content', 'creation', 'blog'],
			end_time: '2024-08-22'
		},
		{
			id: '10',
			project_title: 'Security Audit',
			project_description: 'Perform a security audit to identify vulnerabilities.',
			status: 'Completed',
			project_tag: ['security', 'audit'],
			end_time: '2024-07-28'
		},
		{
			id: '11',
			project_title: 'Employee Training Program',
			project_description: 'Develop and implement a new training program for employees.',
			status: 'Not Started',
			project_tag: ['training', 'HR'],
			end_time: '2024-09-05'
		},
		{
			id: '12',
			project_title: 'Sales Report Analysis',
			project_description: 'Analyze the sales reports to determine trends and insights.',
			status: 'In Progress',
			project_tag: ['sales', 'report', 'analysis'],
			end_time: '2024-08-27'
		}
	];

	const projectDialogShow = false;
</script>

<LayoutWrapper>
	<div class="w-full space-y-6">
		<div></div>
		<div class="grid w-full grid-cols-10 gap-3.5">
			<div class="col-span-2 h-full w-full">
				<Resizable.PaneGroup
					direction="vertical"
					class="w-full rounded-lg border border-solid border-border"
				>
					<Resizable.Pane defaultSize={16}>
						<div class="space-y-2.5 p-3">
							<div class="flex w-full items-center justify-between gap-2.5">
								<h4 class="text-xl capitalize">On Task Project</h4>
								<Button variant="outline" size="icon" class="max-h-9 max-w-9 rounded-full">
									<MoveUpRight class="h-3.5 w-3.5" />
								</Button>
							</div>
							<ToggleGroup.Root
								type="single"
								variant="outline"
								class="flex-wrap justify-start gap-x-2 gap-y-1.5"
							>
								{#each onGoingTaskFilter as filter}
									<ToggleGroup.Item
										class="flex h-auto items-center justify-center border-border py-1 capitalize"
										value={filter.id}
										aria-label="Toggle bold"
									>
										{filter.filter_name}
										{#if filter.count}
											<span
												class="ml-2.5 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-accent text-xs"
												>{filter.count}</span
											>
										{/if}
									</ToggleGroup.Item>
								{/each}
							</ToggleGroup.Root>
						</div>
					</Resizable.Pane>
					<Resizable.Handle withHandle />
					<Resizable.Pane defaultSize={82} minSize={82}>
						<ScrollArea class="h-full w-full  pr-1.5">
							<ul class="space-y-1.5 p-2">
								{#each goingTaskList as data}
									<OnTaskBox {data} />
								{/each}
							</ul>
						</ScrollArea>
					</Resizable.Pane>
				</Resizable.PaneGroup>
			</div>
			<div class="col-span-6 h-full w-full">
				<div class="w-full space-y-2.5">
					<div class="space-y-4 px-1.5 py-3">
						<div class="flex w-full items-center justify-between gap-2.5">
							<h4 class="text-xl capitalize">Project List</h4>
							<Button variant="outline" size="icon" class="max-h-9 max-w-9 rounded-full">
								<Plus class="h-3.5 w-3.5" />
							</Button>
						</div>
						<div class="h-full w-full">
							<ProjectList />
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-2 w-full"></div>
		</div>
	</div>
	<ProjectDialog dialogOpen={projectDialogShow} />
</LayoutWrapper>
