import './vendor.ts';

import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { HackjamJhipsterSharedModule } from 'app/shared';
import { HackjamJhipsterCoreModule } from 'app/core';
import { HackjamJhipsterAppRoutingModule } from './app-routing.module';
import { HackjamJhipsterHomeModule } from './home/home.module';
import { HackjamJhipsterAccountModule } from './account/account.module';
import { HackjamJhipsterEntityModule } from './entities/entity.module';
import { StateStorageService } from 'app/core/auth/state-storage.service';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { ErrorComponent, FooterComponent, JhiMainComponent, NavbarComponent, PageRibbonComponent } from './layouts';
import { HackjamJhipsterAppointmentModule } from 'app/appointment/appointment.module';

@NgModule({
    imports: [
        BrowserModule,
        HackjamJhipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        HackjamJhipsterSharedModule,
        HackjamJhipsterCoreModule,
        HackjamJhipsterHomeModule,
        HackjamJhipsterAccountModule,
        HackjamJhipsterAppointmentModule,
        HackjamJhipsterEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [StateStorageService, Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class HackjamJhipsterAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
