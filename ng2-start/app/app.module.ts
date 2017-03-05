import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        UserProfileComponent,
        UserFormComponent,
        AppComponent,
    ],
    bootstrap: [ AppComponent ]
})


export class AppModule {}
