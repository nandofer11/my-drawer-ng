import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'report',
    loadChildren: () => import('~/app/report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'user',
    loadChildren: () => import('~/app/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('~/app/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('~/app/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'assistence',
    loadChildren: () => import('~/app/assistence/assistence.module').then((m) => m.AssistenceModule),
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
