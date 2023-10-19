import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { AssistenceComponent } from './assistence.component'

const routes: Routes = [{ path: '', component: AssistenceComponent }]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class AssistenceRoutingModule {}
