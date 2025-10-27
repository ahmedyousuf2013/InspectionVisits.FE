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

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';

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
    MatRadioModule,

     MatInputModule,
     MatButtonModule,
     MatCardModule,
     MatFormFieldModule,
     ReactiveFormsModule,
    BrowserAnimationsModule,  // 👈 لازم يكون قبل ToastrModule
    ToastrModule.forRoot({
      timeOut: 3000,            // مدة العرض 3 ثواني
      positionClass: 'toast-bottom-right', // مكان التوستر
      preventDuplicates: true,  // عدم تكرار الرسالة نفسها
      progressBar: true,        // يظهر شريط تقدم
    }),
    
],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
