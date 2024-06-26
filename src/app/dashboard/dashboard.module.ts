import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  exports: [LayoutComponent],
})
export class DashboardModule {}
