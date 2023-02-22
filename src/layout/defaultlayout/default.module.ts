import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DefaultRoutingModule } from './default-routing.module'
import { DefaultlayoutComponent } from './layout/defaultlayout.component'

// import { ContactComponent } from '../pages/contact/contact.component'
@NgModule({
  declarations: [DefaultlayoutComponent],
  imports: [CommonModule, DefaultRoutingModule],
})
export class DefaultModule {}
