<script>
    import {posts} from '../store.js';
    import {addApost} from '../service.js';
    let title = "";
    let body = "";
    let inputError = false;
    let textareaError = false;

    const submitPostFront = async (event) => {
        event.preventDefault();
        if(title == "") {
            inputError = true;
        }
        if(body == "") {
            textareaError = true;
        }
        if(inputError || textareaError) return;
        await addPostFront();
        title = "";
        body = "";
    }

    const addPostFront = () => {
        const data = {
            title,
            body,
            userId: Math.floor(Math.random() * 1000)
        }
        addApost(data).then(res => res.status == 201 && posts.set([res.data,...$posts]));
    }
</script>

<section>
    <form on:submit={submitPostFront}>
        <input on:keydown={() => inputError = false} bind:value={title} type="text" placeholder="Enter Title..">
        {#if inputError}
            <span>Please enter title</span>
        {/if}
        <textarea on:keydown={() => textareaError = false} bind:value={body} placeholder="Enter Body..."></textarea>
        {#if textareaError}
            <span>Please enter body</span>
        {/if}
        <button on:click={submitPostFront}>Save</button>
    </form>
</section>

<style>
    section {
        margin: 1rem 0;
    }
    form {
        display: grid;
        grid-template-columns: 1fr;
    }
    input,textarea {
        border: 1px solid #000;
        padding: 5px;
        margin: 4px 0;
    }
    textarea {
        height: 150px;
    }
    input:focus {
        outline: none;
    }
    textarea:focus {
        outline: none;
    }
    button {
        height: 30px;
        background: none;
        border: 1px solid #000;
        margin-top: 4px;
    }
    span {
        border: 1px solid red;
        padding: 3px;
        color: red;
        text-align: center;
        background-color: rgb(255, 164, 164);
    }
</style>