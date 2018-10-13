import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { HackjamJhipsterSharedCommonModule, HackjamJhipsterSharedLibsModule, HasAnyAuthorityDirective, JhiLoginModalComponent } from './';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [HackjamJhipsterSharedLibsModule, HackjamJhipsterSharedCommonModule, ReactiveFormsModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [HackjamJhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, ReactiveFormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HackjamJhipsterSharedModule {}
