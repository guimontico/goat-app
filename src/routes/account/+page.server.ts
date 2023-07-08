import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  const session = locals.session

  if (!session) {
    throw redirect(303, '/')
  }

  const { data: profile } = await locals.sb
    .from('companies')
    .select(`username, full_name, website, avatar_url`)
    .eq('id', session.user.id)
    .single()

  return { session, profile }
}

export const actions = {
  update: async ({ request, locals }) => {
    const formData = await request.formData()
    const fullName = formData.get('fullName') as string
    const username = formData.get('username') as string
    const website = formData.get('website') as string
    const avatarUrl = formData.get('avatarUrl') as string

    const session = await locals.session

    const { error } = await locals.sb.from('companies').upsert({
      id: session?.user.id,
      full_name: fullName,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    })
    if (error) {
      //TODO: create a error handler
      return fail(500, {
        fullName,
        username,
        website,
        avatarUrl,
      })
    }

    return {
      fullName,
      username,
      website,
      avatarUrl,
    }
  },
  signout: async ({ locals }) => {
    const session = await locals.sb
    if (session) {
      await locals.sb.auth.signOut()
      throw redirect(303, '/')
    }
  },
}
