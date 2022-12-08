<template>
  <main>
    <h1>Weather forecast</h1>
    <div v-if="weatherStore.loading">Loading ...</div>
    <div v-if="weatherStore.error">There was an error, please try again.</div>
    <ForecastItem
      v-for="(weather, index) in weatherStore.forecasts"
      :key="index"
      :forecast="weather.forecast"
    />
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import ForecastItem from "../components/ForecastItemComp.vue";
import { useWeatherStore } from "../stores/weather";

const weatherStore = useWeatherStore();
onMounted(() => {
  weatherStore.getForecasts();
});
</script>
