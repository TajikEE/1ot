<template>
  <div class="box-container">
    <Card :class="isNight ? 'night-card' : ''">
      <template #title>Summary </template>
      <template #content>
        <div>{{ text }}</div>
        <div class="sea" v-if="sea" v-tooltip.bottom="sea">
          <i class="pi pi-info-circle"></i>
          <span>Sea weather</span>
        </div>
      </template>
    </Card>
    <Card :class="isNight ? 'night-card' : ''">
      <template #title> Temperature range </template>
      <template #content>
        <div>Min: {{ tempmin }} °C</div>
        <div>Max: {{ tempmax }} °C</div>
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
  text: {
    type: String,
    required: true,
  },
  sea: {
    type: String,
    required: false,
  },
  tempmin: {
    type: Number,
    required: true,
  },
  tempmax: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
@import "../assets/base.css";
.box-container {
  display: flex;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.box-container > :first-child {
  margin-right: 1rem;
}

.sea {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.sea > :last-child {
  margin-left: 0.5rem;
  font-weight: 700;
}
</style>
