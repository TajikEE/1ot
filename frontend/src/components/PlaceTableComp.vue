<template>
  <DataTable v-if="place" :value="place" responsiveLayout="scroll">
    <Column
      :headerStyle="isNight ? 'background-color: #2c567b; color: #ffffff' : ''"
      :class="isNight ? 'night-card' : ''"
      field="name"
      header="Location"
    >
    </Column>

    <Column
      :headerStyle="isNight ? 'background-color: #2c567b; color: #ffffff' : ''"
      :class="isNight ? 'night-card' : ''"
      header="Situation"
    >
      <template #body="slotProps">
        <div class="phenomenon-column">
          <img
            v-tooltip.top="slotProps.data.phenomenon"
            class="icon"
            v-if="slotProps.data.phenomenon === 'Variable clouds'"
            src="../assets/icons/cloudy.svg"
            alt="cloudy"
          />
          <img
            v-tooltip.top="slotProps.data.phenomenon"
            class="icon"
            v-else-if="slotProps.data.phenomenon === 'Moderate shower'"
            src="../assets/icons/rainy.svg"
            alt="rainy"
          />
          <img
            v-tooltip.top="slotProps.data.phenomenon"
            class="icon"
            v-else-if="slotProps.data.phenomenon === 'Clear'"
            src="../assets/icons/clear.svg"
            alt="clear"
          />
          <img
            v-tooltip.top="slotProps.data.phenomenon"
            class="icon"
            v-else-if="slotProps.data.phenomenon === 'Light shower'"
            src="../assets/icons/light-rain.svg"
            alt="light rain"
          />
          <img
            v-tooltip.top="slotProps.data.phenomenon"
            class="icon"
            v-else-if="slotProps.data.phenomenon === 'Few clouds'"
            src="../assets/icons/few-cloud.svg"
            alt="few clouds"
          />
        </div>
      </template>
    </Column>
    <Column
      :headerStyle="isNight ? 'background-color: #2c567b; color: #ffffff' : ''"
      :class="isNight ? 'night-card' : ''"
      header="Max temp (°C)"
    >
      <template #body="slotProps">
        <div>
          {{ slotProps.data.tempmax ? slotProps.data.tempmax : "N/A" }}
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<script setup>
defineProps({
  isNight: {
    type: Boolean,
    required: false,
  },
  place: {
    type: Array,
    required: false,
  },
});
</script>

<style scoped>
@import "../assets/base.css";
.phenomenon-column {
  display: flex;
  align-items: center;
}
.icon {
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
}

.panel > .panel-heading {
  background-image: none;
  background-color: red;
  color: white;
}

.p-datatable-header {
  background-color: red !important;
}
</style>
