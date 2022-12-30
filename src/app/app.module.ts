import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';

const appRoutes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
