import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginlayoutComponent as Loginlayout } from './layout/loginlayout.component'
const routes: Routes = [
  {
    path: '',
    component: Loginlayout,
    children: [
      {
        path: 'login',
        component: Loginlayout,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
