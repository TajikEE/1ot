import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "../axios";

export const useWeatherStore = defineStore("weather", () => {
  const forecasts = ref([]);
  const loading = ref(false);
  const error = ref(false);
  const getForecasts = async () => {
    loading.value = true;
    error.value = false;
    try {
      const response = await axios.get("/weather-forecast");
      forecasts.value = response.data;
    } catch (ex) {
      console.error(ex);
      error.value = true;
    } finally {
      loading.value = false;
    }
  };

  return { getForecasts, forecasts, loading, error };
});
