import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

//import layout
import { DefaultlayoutComponent as Defaultlayout } from '../layout/defaultlayout/layout/defaultlayout.component'
import { LoginlayoutComponent as Loginlayout } from '../layout/loginlayout/layout/loginlayout.component'

//config rounting path
const routes: Routes = [
  //default layout
  {
    path: '',
    component: Defaultlayout,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../layout/defaultlayout/default.module').then(
            (c) => c.DefaultModule
          ),
      },
    ],
  },

  //login layout

  {
    path: '',
    component: Loginlayout,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('../layout/loginlayout/login.module').then(
            (c) => c.LoginModule
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
