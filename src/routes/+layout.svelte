<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import '../app.postcss';
	import Navtrail from '../components/Navtrail.svelte';
	import { supabaseClient } from '$lib/supabase';
	import { invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead"><a href="/">goat.app</a></svelte:fragment>
			<svelte:fragment slot="trail">
				<Navtrail />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="w-full px-2 pt-2 md:px-4 lg:px-8">
		<slot />
	</div>
</AppShell>
