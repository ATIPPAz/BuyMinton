import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DefaultlayoutComponent as Defaultlayout } from './layout/defaultlayout.component'

const routes: Routes = [
  {
    path: '',
    component: Defaultlayout,
    // children: [
    //   {
    //     path: '',
    //     component: Defaultlayout,
    //   },
    // ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
