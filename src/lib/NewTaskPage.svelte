<script lang="ts">
  import { TaskStatus } from "../api/TasksApi";

  import {tasks} from "../store";

  let title = "";
  let description = "";

  let error = false;
  $: {
    error = title && title.length < 5;
  }

  function save() {
    const id = new Date().getTime();

    tasks.update(old => [...old, {
      id,
      title,
      description,
      status: TaskStatus.ToDo
    }]);
  }

  function reset() {
    title = '';
    description = '';
  }
</script>

<main>
  <h3>Add new task</h3>

  <input 
    placeholder="Title"
    bind:value={title}
    class:error/>

  <textarea 
    placeholder="Description"
    bind:value={description}/>

  <footer>
    <button class="primary" on:click={save}>Save</button>
    
    {#if title || description}
      <button on:click={reset}>Reset</button>
    {/if}
  </footer>

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }

  input.error {
    border-color: red;
  }

  input, textarea {
    border: 1px solid #D4D4D4;
    min-height: 22px;
    padding: 4px 10px;
    outline: 0;
    border-radius: 6px;
    margin-bottom: 12px;
  }

  button {
    background: #E4E4E4;
    color: #888;
    border: 0;
    max-width: 100px;
    padding: 8px;
    border-radius: 6px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: .25px;
  }

  button:hover {
    opacity: .9;
  }

  button.primary {
    background: palevioletred;
    color: #FFF;
  }
</style>