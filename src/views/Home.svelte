<script lang="ts">
  import axios from "axios";
  import { API_URL } from "../config";
  import { Series } from "../models/Series";
  import SeriesCard from "../components/SeriesCard.svelte";
  import { seriesFound } from "../store/series";

  let filter: string = "";
  let series: Series[];
  seriesFound.subscribe((value) => (series = value));

  const http = axios.create({
    baseURL: API_URL,
  });

  let searchSeries = async () => {
    const response = await http.get("/", { params: { q: filter } });
    const data = response.data;
    if (data) {
      const seriesArray = data.map((result: any) => new Series(result["show"]));
      seriesFound.set(seriesArray);
    } else {
      seriesFound.set([]);
    }
  };
</script>

<div id="container">
  <div id="searchArea">
    <input
      type="text"
      placeholder="Type the name of the series"
      bind:value={filter}
      on:keyup={searchSeries}
    />
  </div>
  <div id="resultsArea">
    {#each series as s}
      <SeriesCard series={s} />
    {:else}
      <div />
    {/each}
  </div>
</div>

<style lang="scss">
  #container {
    padding: 20px;
  }
  #searchArea {
    margin: auto auto 50px auto;
    text-align: center;
    input {
      width: 35%;
      height: 30px;
      border-radius: 15px;
      border: 2px solid #aaa;
      padding-left: 15px;
      font-family: "main";
      &:focus {
        outline: none;
        border: 2px solid #ccc;
        box-shadow: 2px 2px 5px #c5eff7, -2px -2px 5px #c5eff7;
      }
    }
  }
  #resultsArea {
    display: flex;
    flex-wrap: wrap;
  }
</style>
