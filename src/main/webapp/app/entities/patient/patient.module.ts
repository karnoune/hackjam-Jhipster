import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HackjamJhipsterSharedModule } from 'app/shared';
import {
    PatientComponent,
    PatientDeleteDialogComponent,
    PatientDeletePopupComponent,
    PatientDetailComponent,
    patientPopupRoute,
    patientRoute,
    PatientUpdateComponent
} from './';

const ENTITY_STATES = [...patientRoute, ...patientPopupRoute];

@NgModule({
    imports: [HackjamJhipsterSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PatientComponent,
        PatientDetailComponent,
        PatientUpdateComponent,
        PatientDeleteDialogComponent,
        PatientDeletePopupComponent
    ],
    entryComponents: [PatientComponent, PatientUpdateComponent, PatientDeleteDialogComponent, PatientDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HackjamJhipsterPatientModule {}
