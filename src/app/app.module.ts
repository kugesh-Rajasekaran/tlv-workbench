import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeChartComponent } from './components/tree/tree.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [AppComponent, TreeChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    ClipboardModule,
  ],
  providers: [ClipboardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
