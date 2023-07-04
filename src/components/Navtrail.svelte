<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<LightSwitch rounded="rounded-full" />
{#if !!$page.data.session?.user}
	<div class="flex items-center gap-2">
		<img
			class="h-7 w-7 rounded-full"
			referrerpolicy="no-referrer"
			src={$page.data.session?.user?.user_metadata?.avatar_url}
			alt={$page.data.session?.user?.user_metadata?.name}
		/>
		<p class="hidden font-bold md:block">{$page.data.session?.user?.user_metadata?.name}</p>
	</div>
{:else}
	<a href="/register" class="btn variant-filled-secondary">Login</a>
	<!-- <button class="btn variant-filled-primary" disabled={loading}> login </button> -->
{/if}
