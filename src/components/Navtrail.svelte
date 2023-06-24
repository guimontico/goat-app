<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let loading = false;
	console.log('page: ' + $page.data.session);
</script>

<LightSwitch rounded="rounded-full" />
{#if !$page.data.session?.user}
	<div class="flex items-center gap-2">
		<img
			class="h-7 w-7 rounded-full"
			referrerpolicy="no-referrer"
			src={$page.data.session?.user?.image}
			alt={$page.data.session?.user?.name}
		/>
		<p class="hidden font-bold md:block">{$page.data.session?.user?.name}</p>
	</div>
	<button class="btn variant-filled-primary" disabled={loading}> login </button>
{/if}
