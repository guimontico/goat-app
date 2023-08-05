<script lang="ts">
	export let data;

	let { session, company, error, userName } = data;
	$: ({ session, company, error, userName } = data);

	let companyForm: HTMLFormElement;
	let loading = false;
	let fullName: string = company?.slug ?? '';
	let username: string = userName ?? '';
	let description: string = company?.description ?? '';
	let CNPJ: string = company?.CNPJ ?? '';
	let userAvatarUrl: string = session?.user?.user_metadata?.avatar_url;
</script>

<div class="container mx-auto p-8 space-y-8">
	<h1 class="h1">{fullName}</h1>
	<p>Olá {username}, o que deseja fazer em {description}, hoje?</p>
	<section>
		<a class="btn variant-filled-primary" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="btn variant-filled-secondary" href="https://tailwindcss.com/">Tailwind</a>
		<a class="btn variant-filled-tertiary" href="https://github.com/">GitHub</a>
	</section>
</div>
