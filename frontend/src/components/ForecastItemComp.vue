<template>
  <div>
    <ForecastByDate
      v-for="dateForecast in forecast"
      :key="dateForecast.date"
      :forecast="dateForecast"
    />
  </div>
</template>

<script setup>
import ForecastByDate from "./ForecastByDate.vue";

defineProps({
  forecast: {
    type: Object,
    required: true,
  },
});
</script>
