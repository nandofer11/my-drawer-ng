import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { AssistenceRoutingModule } from './assistence-routing.module'
import { AssistenceComponent } from './assistence.component'

@NgModule({
  imports: [NativeScriptCommonModule, AssistenceRoutingModule],
  declarations: [AssistenceComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AssistenceModule {}
