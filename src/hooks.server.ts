import "$lib/supabase"

// import { handleHooks } from "@lucia-auth/sveltekit"
import { auth } from '$lib/server/lucia'
import type { Handle } from '@sveltejs/kit'
// import { sequence } from "@sveltejs/kit/hooks"

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event)
	return await resolve(event)
}

// export const handle: Handle = async ({ event, resolve }) => {
//   const { session, supabaseClient } = await getSupabase(event)
//   event.locals.sb = supabaseClient
//   event.locals.session = session
//   event.locals.user = session?.user ?? null

//   // TODO: check how to make it works with login
//   if (event.url.pathname.startsWith("/dashboard")) {
// 		if (!event.locals.user) {
// 			throw redirect(303, "/login")
// 		}
// 	}

//   return resolve(event)
// }