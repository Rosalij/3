<template>
  <header>
    <div class="Container">
      <h1>My Book App</h1>
<img src="" alt="">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/books">Books</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    background-color: #b94242ff;
    padding: 1rem 0;
    color: white;
  }

  .Container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  nav a.router-link-active {
    text-decoration: underline;
  }
</style>    
