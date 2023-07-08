import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  const session = await locals.session

  if (!session) {
    throw redirect(303, '/')
  }

  // const { data: companies, error } = await locals.sb
  // .from('companies')
  // .select('id')

  
  const { data: companies } = await locals.sb
  .from('companies')
  .select(`username, full_name, website, avatar_url`)
  .eq('id', session.user.id)
  .single()
  console.log(companies)

  return { session, companies }
}