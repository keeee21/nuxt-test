<script lang="ts" setup>
const router = useRouter()
const routes =router.getRoutes()
</script>

<template>
  <div>
    <header>
      <h1>はじめてのSSR Hands-on</h1>
    </header>
    <aside>
      <h2>メニュー</h2>
      <nav>
        <ul>
          <li v-for="route in routes">
          <NuxtLink :to="route">{{ route.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>
    <main>
      <!-- このスロット部分がページコンポーネントに置き換わります-->
      <slot />
    </main>
  </div>
</template>