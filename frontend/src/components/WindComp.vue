<template>
  <div v-if="wind" class="wind-container">
    <Card :class="isNight ? 'night-card' : ''">
      <template #title>Wind across weather stations: </template>
      <template #content>
        <div class="flex-container wind-item">
          <div v-for="(wind, index) in wind" :key="index">
            <div class="flex-container">
              <img
                :class="{
                  ['arrow']: true,
                  ['northwest']: wind.direction === 'Northwest wind',
                  ['southwest']: wind.direction === 'Southwest wind',
                  ['west']: wind.direction === 'West wind',
                }"
                src="../assets/icons/arrow.svg"
                alt="arrow"
              />

              <div>
                <div>{{ wind.name }}</div>
                <div>Min: {{ wind.speedmin }} m/s</div>
                <div>Max: {{ wind.speedmax }} m/s</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
defineProps({
  isNight: {
    type: Boolean,
    required: false,
  },
  wind: {
    type: Array,
    required: false,
  },
});
</script>

<style scoped>
@import "../assets/base.css";
.wind-container {
  margin-bottom: 1rem;
}
.flex-container {
  display: flex;
  align-items: center;
}

.wind-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.arrow {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}

.northwest {
  transform: rotate(225deg);
}

.southwest {
  transform: rotate(135deg);
}

.west {
  transform: rotate(180deg);
}
</style>
