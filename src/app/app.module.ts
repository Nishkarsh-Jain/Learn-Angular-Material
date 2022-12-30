import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from 'src/includes/header/header.component';
import { FooterComponent } from 'src/includes/footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
