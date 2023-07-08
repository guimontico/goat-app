<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;

	let { session, companies } = data;
	$: ({ session, companies } = data);

	console.log(companies);

	let companyForm: HTMLFormElement;
	let loading = false;
	let fullName: string = companies?.full_name ?? '';
	let username: string = companies?.username ?? '';
	let website: string = companies?.website ?? '';
	let companyAvatarUrl: string = companies?.avatar_url ?? '';
	let userAvatarUrl: string = session?.user?.user_metadata?.avatar_url;
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">{fullName}</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
