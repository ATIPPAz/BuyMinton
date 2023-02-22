import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// import Component
import { HomeComponent } from './home.component'
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
  providers: [],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class AppModule {}
