<template>
  <div class="root">
    <h2 class="date">
      Date: {{ new Date(forecast.date).toLocaleString().split(",")[0] }}
    </h2>
    <div class="container">
      <div class="column">
        <h3>Day</h3>
        <SummaryComp
          :text="forecast.day.text"
          :sea="forecast.day.sea"
          :tempmin="forecast.day.tempmin"
          :tempmax="forecast.day.tempmax"
        />

        <WindComp :wind="forecast.day.wind" />

        <PlaceTableComp :place="forecast.day.place" />
      </div>
      <div class="column">
        <h3>Night</h3>
        <SummaryComp
          :isNight="true"
          :text="forecast.night.text"
          :sea="forecast.night.sea"
          :tempmin="forecast.night.tempmin"
          :tempmax="forecast.night.tempmax"
        />

        <WindComp :isNight="true" :wind="forecast.night.wind" />

        <PlaceTableComp :isNight="true" :place="forecast.night.place" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PlaceTableComp from "./PlaceTableComp.vue";
import SummaryComp from "./SummaryComp.vue";
import WindComp from "./WindComp.vue";

defineProps({
  forecast: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.root {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.container {
  display: flex;
  justify-content: space-between;
}

.container > :first-child {
  margin-right: 2rem;
}

.date {
  margin-bottom: 1.5rem;
}

.column {
  flex: 1 1 0px;
}
</style>
