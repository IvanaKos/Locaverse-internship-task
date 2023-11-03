<template>
  <div class="header">
    <nav>
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/experience" class="nav-link">My Experience</NuxtLink>
    </nav>
  </div>
</template>

<style>
.header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}

nav {
  display: flex;
}

.nav-link {
  padding: 0 20px;
  color: hsl(195deg 63% 48%);
}

.active-link {
  text-decoration: underline;
}

a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
