<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Header from "./components/Header.svelte";
  import Home from "./views/Home.svelte";
  import SeriesDetail from "./views/SeriesDetail.svelte";
</script>

<Router>
  <Header />

  <Route path="/" component={Home} />
  <Route path="series" component={SeriesDetail} />
</Router>
