import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DefaultlayoutComponent as Defaultlayout } from './layout/defaultlayout.component'
import { HomeComponent } from '../../pages/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: Defaultlayout,
    children: [
      {
        path: 'home',
        component: Defaultlayout,
        // children: [
        //   {
        //     path: 'home',
        //     loadChildren: () =>
        //       import('../../pages/home/home.module').then((c) => c.AppModule),
        //   },
        // ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
