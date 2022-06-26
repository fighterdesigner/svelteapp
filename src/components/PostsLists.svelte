<script>
import { createEventDispatcher } from 'svelte';
import {fade, scale} from 'svelte/transition';
const dispatch = createEventDispatcher();

export let allPosts;
const deletePost = (postId) => {
    dispatch("delete-post", postId);
}
</script>

<section>
    {#each allPosts as post (post.id)}
        <div in:scale out:fade>
            <button on:click={() => deletePost(post.id)}>x</button>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    {/each}
</section>

<style>
section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    font-size: 14px;
}
h2,p {
    margin: 0;
}
div {
    border: 1px solid #000;
    padding: 14px 6px 6px 6px;
    position: relative;
}
button {
    position: absolute;
    top: 5px;
    right: 5px;
    border: 1px solid #000;
    background: none;
    font-weight: bold;
}
</style>
