import type { Series } from "./../models/Series";
import { writable } from "svelte/store";

export let seriesFound = writable<Series[]>([]);
export let seriesSelected = writable<Series>(undefined);
