<script lang="ts">
  import {Router, Route, Link} from "svelte-navigator";
  import {fetchTasks, DemoTaskThree, TaskDto} from './api/TasksApi';
  import NewTaskPage from "./lib/NewTaskPage.svelte";
  import TaskLine from './lib/TaskLine.svelte';
  import { flip } from 'svelte/animate';
  import {tasks} from "./store";
import { onDestroy, onMount } from "svelte";

  onMount(() => {
    fetchTasks().then(data => {
      tasks.set(data);
    });
  })

  $: document.title = `${$tasks.length} tasks`;

  function onTaskUpdate(ev: CustomEvent<{task: TaskDto}>) {
    const {task} = ev.detail;

    const existing = $tasks.find(it => it.id === task.id);
    if (existing) {
      existing.status = task.status;
      tasks.set($tasks);
    }
  }
</script>

<main>
  <Router>
    <h1>Tasks: {$tasks.length}</h1>

    <Route path="/">
      <ul>
        {#each $tasks as task, idx (task.id)}
        <li animate:flip>
          <TaskLine 
            task={task} 
            on:update={onTaskUpdate}  />
        </li>
        {/each}
      </ul>

      <footer>
        <Link to="/new">Create task</Link>
      </footer>
    </Route>
    <Route path="/new">
      <NewTaskPage />
    </Route>
  </Router>
</main>

<style>
  main {
    padding: 24px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
