import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GridModule } from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, EmployeeDetailsComponent],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
