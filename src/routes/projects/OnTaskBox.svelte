<script>
	export let data;
</script>

<li class="box">
	<div>
		<div class="space-y-0.5">
			<h5 class="text-base">{data.project_title}</h5>
			<p class="text-sm">{data.project_description}</p>
		</div>
        <ul></ul>
	</div>
</li>

<style>
	.box {
		@apply w-full rounded-lg border border-solid border-border p-2.5;
	}
</style>
