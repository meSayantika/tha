import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PcaModule } from '../pca/pca.module';
import { PcaVoiceModule } from '../pca-voice/pca-voice.module';
import { PcaFaqModule } from '../pca-faq/pca-faq.module';
import { PcaAboutModule } from '../pca-about/pca-about.module';
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    PcaModule,
    PcaVoiceModule,
    PcaFaqModule,
    PcaAboutModule
  ],
  exports:[AvatarComponent],
  declarations: [AvatarComponent]
})
export class AvatarModule { }
