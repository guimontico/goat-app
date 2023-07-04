<script lang="ts">
	import { enhance } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { Provider } from '@supabase/supabase-js';
	import type { SubmitFunction } from '@sveltejs/kit';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider,
			options: {
				redirectTo: `${window.location.origin}/dashboard`
			}
		});
	};

	const submitSocialLogin: SubmitFunction = async ({ action, cancel }) => {
		switch (action.searchParams.get('provider')) {
			case 'google':
				await signInWithProvider('google');
				break;
			case 'discord':
				await signInWithProvider('discord');
				break;
			case 'github':
				await signInWithProvider('github');
				break;
			default:
				break;
		}
		cancel();
	};
</script>

<main>
	<div>
		<form action="?/register" method="POST" class="auth-form flex justify-center">
			<div class="flex flex-col items-center w-1/5 text-center">
				<label class="label w-full">
					<span>Email</span>
					<input class="input" type="text" placeholder="Email" name="email" />
				</label>
				<label class="label w-full">
					<span>Password</span>
					<input class="input" type="password" placeholder="Password" name="password" />
				</label>
				<div class="flex w-1/3 justify-center">
					<button type="button" class="btn variant-filled mt-2">Register</button>
				</div>
			</div>
		</form>
	</div>
	<div class="flex flex-row justify-center m-4">
		<form class="auth-form flex justify-center" method="POST" use:enhance={submitSocialLogin}>
			<button formaction="?/login&provider=github" class="btn variant-outline-primary m-1"
				>Github</button
			>
			<button formaction="?/login&provider=discord" class="btn variant-outline-secondary m-1"
				>Discord</button
			>
			<button formaction="?/login&provider=google" class="btn variant-outline-tertiary m-1"
				>Google</button
			>
		</form>
	</div>
</main>
