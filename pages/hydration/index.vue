<script lang="ts" setup>
import { onServerPrefetch } from 'vue';

  const lifecycleHooks = reactive({
    setup: false,
    onServerPrefetch: false,
    onBeforeMount: false,
    onMounted: false,
  })

  lifecycleHooks.setup = true
  onServerPrefetch(() => { lifecycleHooks.onServerPrefetch = true})
  lifecycleHooks.onServerPrefetch = true
  onBeforeMount(() => { lifecycleHooks.onBeforeMount = true})
  onMounted(() => { lifecycleHooks.onMounted = true})
</script>

<template>
  <div>
    <h2>{{ $route.name }}</h2>
    <table>
      <thead>
        <tr>
          <th>ライフサイクルフック</th>
          <th>実行された?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>setup</td>
          <td>{{ lifecycleHooks.setup }}</td>
        </tr>
        <tr>
          <td>onServerPrefetch</td>
          <td>{{ lifecycleHooks.onServerPrefetch }}</td>
        </tr>
        <tr>
          <td>onBeforeMount</td>
          <td><ClientOnly>{{ lifecycleHooks.onBeforeMount }}</ClientOnly></td>
        </tr>
        <tr>
          <td>onMounted</td>
          <td>{{ lifecycleHooks.onMounted }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
