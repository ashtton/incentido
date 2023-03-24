<script>
    import { fade } from 'svelte/transition';
    import {signIn} from "@auth/sveltekit/client";

    let visible = false;
    setTimeout(() => {
        visible = true;
    }, 500)

    export let data;

</script>

{#if data.session}
    {data.session.user.email}
{/if}
{#if visible}
    <main
            transition:fade
    >
        <div class="container">
            <div class="header">
                <p class="title">
                    Incentido
                </p>
                <p class="subtitle">
                    Login
                </p>
            </div>

            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />

            <button on:click={() => signIn("discord")}>Login</button>

        </div>
    </main>
{/if}

<style>
    :global(body) {
        background-color: var(--dark-blue);
        color: white;
    }

    main {
        max-width: 350px;
        margin: auto;
        overflow: hidden;
    }

    .container {
        margin-top: 5rem;
        border: 1px solid white;
        padding: 3rem;
        border-radius: 0.2rem;
    }

    .header {
        user-select: none;
        margin-bottom: 0.5rem;
    }

    .title {
        color: var(--orange);
        font-family: 'Ubuntu Bold', serif;
        font-size: 1.5rem;
    }

    input {
        width: 100%;
        background-color: var(--dark-blue);
        border: 1px solid #D8D8D8;
        border-radius: 0.2rem;
        color: white;
        margin-top: 0.5rem;
        padding: 0.2rem;
        font-size: 0.55rem;
    }

    ::placeholder {
        color: #D8D8D8;
    }

    input:focus {
        border: 1px solid #D8D8D8;
    }

    button {
        margin-top: 1.5rem;
        color: white;
        font-family: 'Ubuntu Bold', serif;
        background-color: #E9C46A;
        border: none;
        border-radius: 0.2rem;
        padding: 0.2rem 1.3rem;
        font-size: 0.7rem;
    }

    button:hover {
        background-color: #b79953;
    }

</style>