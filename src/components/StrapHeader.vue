<template>
  <header>
      <h1>{{siteName}}</h1>
      <nav>
      <ul>
          <li>
              <a href="#">Projects</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
        </ul>
        </nav>
  </header>
</template>

<script>
  export default {
      name: 'strapHeader',
      props: {
          siteName: {
              default: 'Portfolio',
              type: String
          }
      }
  }
</script>

<style scoped>
  header {
      color: indigo;
      background: hsl(275, 100%, 98%);
      position: fixed;
      top: 0;
      left:0;
      z-index: 100;
      margin: 0;
      width: 100%;
      border-bottom: rgba(227,227,227,0.5) solid 1px;
      display: flex;
      justify-content: space-between;
  }

  ul {
      list-style-type: none;
      margin-right: 20px;
  }

  h1 {
      display: inline;
      margin: 10px;
  }

  li {
      display: inline;
      margin: 4px;
  }
</style>