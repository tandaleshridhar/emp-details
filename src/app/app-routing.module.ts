import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

const routes: Routes = [
  {
    path: "employeeDetails",
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
