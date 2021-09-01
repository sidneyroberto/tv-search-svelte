<script lang="ts">
  import { Link } from "svelte-navigator";
  import type { Series } from "../models/Series";
  import { seriesSelected } from "../store/series";

  export let series: Series;
  let imageNotFound = "assets/img/noimage.png";

  let onSelectSeries = () => seriesSelected.set(series);
</script>

<div class="seriesCard">
  <Link to="/series">
    <img
      on:click={onSelectSeries}
      src={series.thumbURL != "noimage" ? series.thumbURL : imageNotFound}
      alt="Series Folder"
    />
  </Link>
  <Link to="/series">
    <span on:click={onSelectSeries} class="seriesName">{series.name}</span>
  </Link>
  <span class="seriesPremiere"
    >Premiered: {series.premiered.toLocaleDateString("pt-BR")}</span
  >
</div>

<style lang="scss">
  .seriesCard {
    width: 20%;
    margin-bottom: 50px;
    text-align: center;
    img {
      width: 80%;
    }
    span {
      display: block;
    }
    .seriesName {
      font-size: 120%;
    }
    .seriesPremiere {
      font-size: 90%;
    }
  }

  :global(a) {
    color: black;
    text-decoration: none;

    &:hover {
      color: #52b3d9;
    }
  }
</style>
