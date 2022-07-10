<script type="ts">
  import { createEventDispatcher } from "svelte";
  import { DefaultTask, TaskDto, TaskStatus } from "../api/TasksApi";
  
  export let task: TaskDto = DefaultTask;

  const dispatchUpdate = createEventDispatcher<{update: {task: TaskDto}}>();

  const {ToDo, Progress, Done} = TaskStatus;
  const Labels = ["to do", "progress", "done"];

  function setStatus(status: TaskStatus) {
    dispatchUpdate("update", {task: {...task, status}});
  }
</script>

<main>
  <h3>{task.title}</h3>
  <p>{task.description}</p>

  <ul class="statuses">
    {#each [ToDo, Progress, Done] as sts}
      <li>
        <button
          class:active={task.status === sts}
          on:click={() => setStatus(sts)}>
          {Labels[sts]}
        </button>
      </li>
    {/each}
  </ul>

</main>

<style>
main {
    padding: 12px 0;
  }

  h3 {
    margin: 0;
    font-size: 28px;
  }

  p {
    margin: 0 0 12px;
    font-weight: 100;
    color: #888;
  }

  .statuses {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    background: #F4F4F4;
    font-size: 13px;
    border: 0;
    color: #444;
    padding: 8px 0;
    cursor: pointer;
    transition: .25s all;
    line-height: 1em;
    width: 90px;
    user-select: none;
  }

  button:hover {
    background: #E8E8E8;
  }

  button.active {
    background: #E8E8E8;
    font-weight: bold;
  }

  li:first-child button{
    border-radius: 6px 0 0 6px;
  }

  li:last-child button{
    border-radius: 0 6px 6px 0;
  }
</style>