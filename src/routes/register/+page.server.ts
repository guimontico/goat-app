import { AuthApiError, type Provider } from "@supabase/supabase-js"
import { fail, redirect } from "@sveltejs/kit"
import type { Actions } from "./$types"

const OAUTH_PROVIDERS = ["google", "discord", "github"]

export const actions: Actions = {
	register: async ({ request, locals, url }) => {
		const provider = url.searchParams.get("provider") as Provider
		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: "Provider not supported.",
				})
			}
			const { data, error: err } = await locals.sb.auth.signInWithOAuth({
				provider: provider,
				options: {
					skipBrowserRedirect: false,
					redirectTo: `${window.location.origin}/dashboard`,
				}
			})

			if (err) {
				console.log(err)
				return fail(400, {
					message: "Something went wrong.",
				})
			}

			throw redirect(303, data.url)
		}

		const body = Object.fromEntries(await request.formData())

		const { error: err } = await locals.sb.auth.signUp({
			email: body.email as string,
			password: body.password as string,
		})

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: "Invalid email or password",
				})
			}
			return fail(500, {
				error: "Server error. Please try again later on.",
			})
		}
		throw redirect(303, "/dashboard")
	},
}