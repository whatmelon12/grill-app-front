import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Modules
import { SharedModule } from './../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { 
  //Prevent other modules to import CoreModule
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) {
      throw new Error('You shall not run!')
    }
  }
}