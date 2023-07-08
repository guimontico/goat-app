// See https://kit.svelte.dev/docs/types#app
import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit";
import type { Session, User } from "@supabase/supabase-js";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sb: TypedSupabaseClient
			session: Session | null
			user: User | null
		}
		interface PageData {
			session: Session | null
		} 
		// interface Platform {}
	}
}

export {};
