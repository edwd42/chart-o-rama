import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { AboutComponent } from "./modules/about/about.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PageNotFoundComponent } from "./modules/page-not-found/page-not-found.component";
import { OptimizationComponent } from "./shared/components/optimization/optimization.component";
import { SimulationComponent } from "./shared/components/simulation/simulation.component";
import { VisualizationComponent } from "./shared/components/visualization/visualization.component";
import { EnegyPriorityComponent } from "./shared/widgets/enegy-priority/enegy-priority.component";
import { KwhSimComponent } from "./shared/widgets/kwh-sim/kwh-sim.component";
import { LeafletLayersComponent } from "./shared/widgets/leaflet-layers/leaflet-layers.component";
import { OptimizeWidgetComponent } from "./shared/widgets/optimize-widget/optimize-widget.component";
import { Plotly144Component } from "./shared/widgets/plotly144/plotly144.component";
import { Powerbi0Component } from "./shared/widgets/powerbi0/powerbi0.component";
import { ProvStreetlightsComponent } from "./shared/widgets/prov-streetlights/prov-streetlights.component";
import { Pyplot1Component } from "./shared/widgets/pyplot1/pyplot1.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "about",
        component: AboutComponent
      },
      { path: "visualization", component: VisualizationComponent },
      { path: "simulation", component: SimulationComponent },
      { path: "optimization", component: OptimizationComponent },
      { path: "prov-streetlights", component: ProvStreetlightsComponent },
      { path: "plotly144", component: Plotly144Component },
      { path: "pyplot1", component: Pyplot1Component },
      { path: "energy", component: EnegyPriorityComponent },
      { path: "powerbi0", component: Powerbi0Component },

      { path: "kwh-sim", component: KwhSimComponent },
      { path: "optimize-widget", component: OptimizeWidgetComponent },
      { path: "leaflet-layers", component: LeafletLayersComponent },
      { path: "**", component: PageNotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//
