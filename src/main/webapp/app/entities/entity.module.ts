import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HackjamJhipsterPatientModule } from './patient/patient.module';

/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        HackjamJhipsterPatientModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HackjamJhipsterEntityModule {}
