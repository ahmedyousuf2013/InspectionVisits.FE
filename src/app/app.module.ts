import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { StatusDialogComponent } from './layouts/status-dialog/status-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatOptionModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatOptionModule,
    MatRadioModule
],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    StatusDialogComponent,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
