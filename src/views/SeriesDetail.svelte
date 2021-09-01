<script lang="ts">
  import type { Series } from "../models/Series";
  import { seriesSelected } from "../store/series";

  export let series: Series;
  seriesSelected.subscribe((value) => (series = value));
  let imageNotFound = "assets/img/noimage.png";
</script>

<div id="container">
  <div id="thumbArea">
    <img
      src={series.thumbURL != "noimage" ? series.thumbURL : imageNotFound}
      alt="Series Folder"
    />
  </div>
  <div id="detailsArea">
    <p>Name: {series.name}</p>
    <p>Country: {series.country}</p>
    <p>Genres: {series.genres}</p>
    <p>Language: {series.language}</p>
    <p>Status: {series.status}</p>
    <p>Premiered on: {series.premiered.toLocaleDateString("pr-BR")}</p>
  </div>
</div>

<style lang="scss">
  #container {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }
  #thumbArea {
    width: 40%;
    text-align: center;
    img {
      width: 50%;
    }
  }
  #detailsArea {
    width: 60%;
    font-size: 120%;
  }
</style>
