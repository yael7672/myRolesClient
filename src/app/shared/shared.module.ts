import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// לכאן תייבאי את כל הקומפוננטות מהshared שלך:
import { MassgeToUserComponent } from './massge-to-user/massge-to-user.component';
import { MassgeToUserWithEditComponent } from './massge-to-user-with-edit/massge-to-user-with-edit.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PopUpForImageComponent } from './pop-up-for-image/pop-up-for-image.component';
import { SmartCardComponent } from './smart-card/smart-card.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    MassgeToUserComponent,
    MassgeToUserWithEditComponent,
    PopUpComponent,
    PopUpForImageComponent,
    SmartCardComponent,
    SmartTableComponent,
  ],
  imports: [CommonModule, FormsModule, NgxPaginationModule],
  exports: [
    MassgeToUserComponent,
    MassgeToUserWithEditComponent,
    PopUpComponent,
    PopUpForImageComponent,
    SmartCardComponent,
    SmartTableComponent,
  ],
})
export class SharedModule {}
