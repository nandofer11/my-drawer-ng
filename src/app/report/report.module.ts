import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { ReportRoutingModule } from './report-routing.module'
import { ReportComponent } from './report.component'

@NgModule({
  imports: [NativeScriptCommonModule, ReportRoutingModule],
  declarations: [ReportComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ReportModule {}
