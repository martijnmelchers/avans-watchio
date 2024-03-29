import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { AuthService } from '../core/services/auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule
    ],
    providers: [
        AuthService,
        InAppBrowser
    ],
    declarations: [LoginPage]
})
export class LoginPageModule {
}
