import { Component, OnInit, ViewChild } from "@angular/core";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { process } from "@progress/kendo-data-query";
import { employees } from "./employee";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"],
})
export class EmployeeDetailsComponent implements OnInit {
  expmore2: boolean = false;

  constructor() {}

  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = employees;
  public gridView: any[];

  public mySelection: string[] = [];
  public dept: string[] = [];
  public deptEmpCount: number = 0;

  public ngOnInit(): void {
    this.gridView = this.gridData;
    this.dept = this.gridData
      .map((value) => value.department)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "name",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

  public filterDept(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "department",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
    this.deptEmpCount = this.gridView.length;
    this.dataBinding.skip = 0;
  }

  emp2years() {}

  public delete() {
    console.log(this.gridData);
    this.gridView = this.gridData.filter(
      (value) => value.department != "Development"
    );
  }
}
