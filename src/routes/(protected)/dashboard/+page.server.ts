import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
  const session = locals.session
  const userName = session?.user.user_metadata.full_name

  if (!session) {
    throw redirect(303, '/')
  }

  
  const { data: company, error } = await locals.sb
  .from('company')
  .select(`id, slug, description, CNPJ, address, phone`)
  .eq('created_by', session.user.id)
  .single()

  return { session, company, error, userName }
}