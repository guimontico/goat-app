<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';

	import '../app.postcss';
	import Navtrail from '../components/Navtrail.svelte';
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
