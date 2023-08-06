import { authOptions } from '@/lib/sessions'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions);

//can get and create new (we exported as get and post)
export {handler as GET,handler as POST}