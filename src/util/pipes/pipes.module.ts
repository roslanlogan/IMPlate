/**
 * Created by ykichouh on 7/02/2018.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderPipe } from './order.pipe';
import { FilterPipe } from './filter.pipe';
import { IsStringPipe } from './is-string.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { GroupByPipe } from './group.pipe';
import { RoundPipe } from './round.pipe';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  declarations: [
    FilterPipe,
    OrderPipe,
    IsStringPipe,
    SafeHtmlPipe,
    GroupByPipe,
    RoundPipe
  ],
  exports: [
    FilterPipe,
    OrderPipe,
    GroupByPipe,
    RoundPipe
  ],
  providers: []
})
export class PipesModule {
}
