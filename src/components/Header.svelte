<script lang="ts">
  import { Link } from "svelte-navigator";

  let headerLogo = "assets/img/logo64.png";
</script>

<div id="header">
  <img src={headerLogo} alt="TV Search" />
  <Link to="/">
    <span>TV Search</span>
  </Link>
</div>

<style lang="scss">
  $background-color: #2c82c9;

  #header {
    color: white;
    padding: 30px 20px;
    background-color: $background-color;
    * {
      vertical-align: middle;
    }
    img {
      margin-right: 20px;
    }
    span {
      font-family: "title";
      font-size: 300%;
    }

    :global(a) {
      text-decoration: none;
      color: white;
      &:hover {
        color: #c5eff7;
      }
    }
  }
</style>
