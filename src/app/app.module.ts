import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingComponent } from './components/typing/typing.component';
import { WornComponent } from './components/filters/worn/worn.component';
import { RoughpaperComponent } from './components/filters/roughpaper/roughpaper.component';
import { EpisodeItemComponent } from './components/episode-item/episode-item.component';
import { GrainyComponent } from './components/filters/grainy/grainy.component';
import { ParchmentComponent } from './components/parchment/parchment.component';
import { HeroComponent } from './components/hero/hero.component';
import { WavyAnimateComponent } from './components/filters/wavy-animate/wavy-animate.component';
import { DataSetComponent } from './components/data-set/data-set.component';
import { WaitingCounterComponent } from './components/waiting-counter/waiting-counter.component';
import { LogoComponent } from './components/logo/logo.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    WornComponent,
    RoughpaperComponent,
    EpisodeItemComponent,
    GrainyComponent,
    ParchmentComponent,
    HeroComponent,
    WavyAnimateComponent,
    DataSetComponent,
    WaitingCounterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
