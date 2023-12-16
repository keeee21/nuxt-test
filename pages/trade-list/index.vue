<script lang="ts" setup>
  const { tradeList } = await useTradeList()
</script>

<template>
  <div>
    <h2>{{ $route.name }}</h2>
    <table>
      <thead>
        <tr>
          <td>地区名</td>
          <td>面積</td>
          <td>取引価格</td>
          <td>用途</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in tradeList" :key="index">
          <td>{{ record.Municipality }} {{ record.DistrictName }}</td>
          <td>{{ record.Area }}</td>
          <td>{{ record.TradePrice }}</td>
          <td>{{ record.Use }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
