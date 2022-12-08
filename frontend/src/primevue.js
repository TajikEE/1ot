import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";
import Tooltip from "primevue/tooltip";

import "./assets/main.css";
import "primevue/resources/themes/tailwind-light/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";

export const primevueConfig = (app) => {
  app.directive("tooltip", Tooltip);
  app.component("Card", Card);
  app.component("DataTable", DataTable);
  app.component("Column", Column);
  app.use(PrimeVue);
};
