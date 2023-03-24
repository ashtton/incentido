import { SvelteKitAuth } from "@auth/sveltekit"
import { GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"
import Google from "@auth/core/providers/google";

export const handle = SvelteKitAuth({
    providers: [Google({
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET
    })],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (profile) {
                token.id = profile.id
            }

            return token
        },
        async session({ session, token, user }) {
            session.user.id = token.id
            return session
        }
    }
})