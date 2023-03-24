import {redirect} from "@sveltejs/kit";

export const load = async (event) => {
    const session = await event.locals.getSession();

    // if (!session?.user && !event.route.id.includes("login")) {
    //     throw redirect(303, '/');
    // }

    return {
        session: session
    };
};