<script>
	import { Badge } from '$lib/components/ui/badge/index.js';
	export let data;
</script>

<li class="box group">
	<div class="space-y-2.5">
		<div class="space-y-0.5">
			<h5 class="text-base">{data.project_title}</h5>
			<p class="text-sm">{data.project_description}</p>
		</div>
		<ul class="flex flex-wrap items-center gap-1.5">
			{#each data.project_tag as tag}
				<li>
					<Badge variant="outline" class="uppercase group-hover:bg-background">{tag}</Badge>
				</li>
			{/each}
		</ul>
	</div>
	<div class="absolute right-1.5 top-2">
		<Badge variant="outline" class="group-hover:bg-background">{data.status}</Badge>
	</div>
</li>

<style>
	.box {
		@apply relative w-full rounded-lg border border-solid border-border p-2.5 hover:bg-accent;
	}
</style>
