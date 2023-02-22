import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultlayoutComponent } from './layout/defaultlayout.component'

@NgModule({
  declarations: [DefaultlayoutComponent],
  imports: [CommonModule, DefaultRoutingModule],
})
export class DefaultModule {}
