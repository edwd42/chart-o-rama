import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HighchartsChartModule } from "highcharts-angular";
import { KwhSimComponent } from "../shared/widgets/kwh-sim/kwh-sim.component";
import { OptimizeWidgetComponent } from "../shared/widgets/optimize-widget/optimize-widget.component";
// import { ProvStreetlightsComponent } from "./widgets/prov-streetlights/prov-streetlights.component";
import { ProvStreetlightsComponent } from "../shared/widgets/prov-streetlights/prov-streetlights.component";
import { OptimizationComponent } from "./components/optimization/optimization.component";
import { SimulationComponent } from "./components/simulation/simulation.component";
import { VisualizationComponent } from "./components/visualization/visualization.component";

@NgModule({
  declarations: [
    VisualizationComponent,
    SimulationComponent,
    OptimizationComponent,
    ProvStreetlightsComponent,
    KwhSimComponent,
    OptimizeWidgetComponent
  ],
  imports: [CommonModule, HighchartsChartModule],
  exports: [
    VisualizationComponent,
    SimulationComponent,
    OptimizationComponent,
    ProvStreetlightsComponent,
    KwhSimComponent,
    OptimizeWidgetComponent
  ]
})
export class ToolsModule {}