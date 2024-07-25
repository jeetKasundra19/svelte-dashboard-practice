<script>
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Pagination from '$lib/components/ui/pagination';
	import { Button } from '$lib/components/ui/button/index.js';
	import ListFilter from 'lucide-svelte/icons/list-filter';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

	const projectList = [
		{
			project_name: 'Project Alpha',
			'Project Description': 'Development of a new mobile application for task management.',
			start_date: '2023-01-10',
			end_date: '2023-12-10',
			project_manager: 'John Doe',
			team_members: ['Alice Smith', 'Bob Johnson', 'Carol White'],
			budget: 150000,
			status: 'In Progress',
			client_name: 'Tech Innovators Inc.',
			'Key Deliverables': ['Mobile app', 'User documentation', 'Training sessions']
		},
		{
			project_name: 'Project Beta',
			'Project Description': 'Website redesign for improved user experience and SEO.',
			start_date: '2023-02-01',
			end_date: '2023-08-01',
			project_manager: 'Jane Doe',
			team_members: ['David Brown', 'Eva Green', 'Frank Black'],
			budget: 75000,
			status: 'Completed',
			client_name: 'Web Solutions Ltd.',
			'Key Deliverables': ['New website design', 'SEO audit', 'User testing report']
		},
		{
			project_name: 'Project Gamma',
			'Project Description': 'Implementation of a new CRM system.',
			start_date: '2023-03-15',
			end_date: '2023-11-15',
			project_manager: 'Michael Blue',
			team_members: ['Grace Yellow', 'Hank Pink', 'Ivy Purple'],
			budget: 120000,
			status: 'In Progress',
			client_name: 'SalesForce Plus',
			'Key Deliverables': ['CRM software', 'User training', 'Integration with existing systems']
		},
		{
			project_name: 'Project Delta',
			'Project Description': 'Cloud migration for the company’s data storage.',
			start_date: '2023-04-01',
			end_date: '2023-10-01',
			project_manager: 'Nancy Orange',
			team_members: ['Jack Red', 'Karen Grey', 'Leo Green'],
			budget: 95000,
			status: 'In Progress',
			client_name: 'DataCloud Inc.',
			'Key Deliverables': ['Data migration', 'Cloud setup', 'Security assessment']
		},
		{
			project_name: 'Project Epsilon',
			'Project Description': 'Development of an AI-based customer service chatbot.',
			start_date: '2023-05-10',
			end_date: '2023-12-10',
			project_manager: 'Oscar Brown',
			team_members: ['Paul White', 'Quinn Black', 'Rachel Blue'],
			budget: 200000,
			status: 'In Progress',
			client_name: 'AI Services Co.',
			'Key Deliverables': ['Chatbot', 'Integration with customer service platform', 'User guide']
		},
		{
			project_name: 'Project Zeta',
			'Project Description': 'Upgrade of the company’s cybersecurity systems.',
			start_date: '2023-06-01',
			end_date: '2023-12-01',
			project_manager: 'Sarah White',
			team_members: ['Tom Blue', 'Uma Green', 'Victor Red'],
			budget: 180000,
			status: 'In Progress',
			client_name: 'SecureTech Ltd.',
			'Key Deliverables': ['New firewall', 'Encryption system', 'Security training']
		},
		{
			project_name: 'Project Eta',
			'Project Description': 'Expansion of the company’s e-commerce platform.',
			start_date: '2023-07-15',
			end_date: '2024-01-15',
			project_manager: 'Walter Grey',
			team_members: ['Xena Purple', 'Yvonne Yellow', 'Zack Black'],
			budget: 220000,
			status: 'In Progress',
			client_name: 'ShopEase Inc.',
			'Key Deliverables': ['New features', 'Performance improvements', 'User feedback analysis']
		},
		{
			project_name: 'Project Theta',
			'Project Description': 'Development of a blockchain-based supply chain management system.',
			start_date: '2023-08-01',
			end_date: '2024-02-01',
			project_manager: 'Amanda Black',
			team_members: ['Brian White', 'Cindy Grey', 'Daniel Red'],
			budget: 250000,
			status: 'In Progress',
			client_name: 'ChainLink Ltd.',
			'Key Deliverables': ['Blockchain system', 'User manual', 'Integration with suppliers']
		},
		{
			project_name: 'Project Iota',
			'Project Description': 'Implementation of an IoT-based smart office system.',
			start_date: '2023-09-10',
			end_date: '2024-03-10',
			project_manager: 'Ethan Blue',
			team_members: ['Fiona White', 'George Black', 'Holly Grey'],
			budget: 195000,
			status: 'In Progress',
			client_name: 'SmartOffice Co.',
			'Key Deliverables': ['IoT devices', 'Integration with office systems', 'User training']
		}
	];
</script>

<div class="space-y-4">
	<div class="flex w-full items-center justify-between">
		<Input class="max-w-sm" placeholder="Filter project name..." type="text" />
		<div class="flex items-center gap-1.5">
			<Button variant="outline">
				<ListFilter class="mr-2 h-5 w-5" />
				Sort
			</Button>
		</div>
	</div>
	<div class="space-y-2.5">
		<div class="h-full w-full overflow-hidden rounded-lg border border-solid border-border">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Name</Table.Head>
						<Table.Head>Team Members</Table.Head>
						<Table.Head>Budget</Table.Head>
						<Table.Head>Date</Table.Head>
						<Table.Head>Client</Table.Head>
						<Table.Head>Status</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each projectList as project, i (i)}
						<Table.Row>
							<Table.Cell class="font-medium">{project.project_name}</Table.Cell>
							<Table.Cell class="flex items-center -space-x-1.5">
								{#each project.team_members as member}
									<Avatar.Root class="max-w-8 text-xs max-h-8">
										<Avatar.Fallback>{member[0]}</Avatar.Fallback>
									</Avatar.Root>
								{/each}
							</Table.Cell>
							<Table.Cell>₹{project.budget}</Table.Cell>
							<Table.Cell>{project.start_date} / {project.end_date}</Table.Cell>
							<Table.Cell>{project.client_name}</Table.Cell>
							<Table.Cell>{project.status}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
		<Pagination.Root class="items-end" count={100} perPage={10} let:pages let:currentPage>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton variant="outline" />
				</Pagination.Item>
				<Pagination.Item>
					<Pagination.NextButton variant="outline" />
				</Pagination.Item>
			</Pagination.Content>
		</Pagination.Root>
	</div>
</div>
