<script>
  import { onMount } from 'svelte';
  import {posts} from './store.js';
  import {getAllPosts, deletePost} from './service.js';
  import PostsLists from './components/PostsLists.svelte';
  import AddPost from './components/AddPost.svelte';

  //get all posts
  onMount(() => {
    getPostsFront();
  })

  const getPostsFront = async () => {
    await getAllPosts().then(res => posts.set(res.data))
  }

  const deletePostFront = async (event) => {
    const postId = event.detail;
    await deletePost(postId).then(res => res.status === 200 && posts.set(    $posts.filter(post => post.id != postId)));
  }

</script>

<main>
  <div>
    <h1>Svelte Posts App</h1>
    <a target="_new" href="http://www.fighterdesigner.com">@fighterdesigner</a>
  </div>
  <AddPost />
  <PostsLists allPosts={$posts} on:delete-post={deletePostFront} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
    max-width: 500px;
  }
  div {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  a {
    color: black;
    border: 1px solid #000;
    padding: 5px;
    margin-left: 5px;
    text-decoration: none;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    right: -5px;
    bottom: -5px;
    width: 10px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    animation: shadowEffect 1.5s infinite linear;
  }

  @keyframes shadowEffect {
    0% {
      box-shadow: 0px 0px 0px;
    }
    50% {
      box-shadow: 0px 0px 10px;
    }
    100% {
      box-shadow: 0px 0px 0px;
    }
  }
</style>
