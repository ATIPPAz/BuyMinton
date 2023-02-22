import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module'
import { LoginlayoutComponent } from './layout/loginlayout.component'

@NgModule({
  declarations: [LoginlayoutComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
