import { writable } from "svelte/store";
import type { TaskDto } from "./api/TasksApi";

export const tasks = writable([] as TaskDto[]);