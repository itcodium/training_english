import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import { EnglishService } from './english.service';

import { AppComponent } from './app.component';
import { PhrasesComponent } from './phrases/phrases.component';
import { SwiperComponent } from './swiper/swiper.component';


@NgModule({
  declarations: [
    AppComponent,
    PhrasesComponent,
    SwiperComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EnglishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
