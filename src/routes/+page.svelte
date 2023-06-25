<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { PageData } from './$types';
	import { supabaseClient } from '$lib/supabase';
	import { enhance } from '$app/forms';

	export let data: PageData;

	const submitLogout: SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	<h1>Goat App</h1>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn variant-filled">LogOut</button>
		</form>
	{:else}
		<div>
			<a href="/login" class="btn variant-filled-primary">Login</a>
			<a href="/register" class="btn variant-filled-secondary">Register</a>
		</div>
	{/if}
</main>
