import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'line-scale-pulse-out' }),
    CoreModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
