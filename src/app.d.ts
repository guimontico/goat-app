// See https://kit.svelte.dev/docs/types#app
import type { PrismaClient } from '@prisma/client'
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
			auth: import('lucia-auth').AuthRequest
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null 
		} 
		// interface Platform {}
	}
	// eslint-disable-next-line no-var
	var __prisma: PrismaClient

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth
		type UserAttributes = {
			username: string
			name: string
		}
	}
}

export {};
