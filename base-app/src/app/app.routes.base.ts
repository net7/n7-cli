import { Routes } from "@angular/router";

import { Page404LayoutComponent } from "@net7/boilerplate-common";
import { HomeLayoutComponent } from "./layouts/home-layout/home-layout";

export const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "home", component: HomeLayoutComponent },
  { path: "**", component: Page404LayoutComponent },
];
