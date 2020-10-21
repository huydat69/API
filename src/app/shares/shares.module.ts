import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharesComponent } from './shares.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [SharesComponent, FooterComponent, MenuComponent, ],
  imports: [
    CommonModule
  ]
})
export class SharesModule { }
