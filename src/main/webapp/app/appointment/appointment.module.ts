import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HackjamJhipsterSharedModule } from 'app/shared';
import { BECOME_PATIENT_ROUTE, BecomePatientComponent } from './';

@NgModule({
    imports: [HackjamJhipsterSharedModule, RouterModule.forChild([BECOME_PATIENT_ROUTE])],
    declarations: [BecomePatientComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [BecomePatientComponent]
})
export class HackjamJhipsterAppointmentModule {}
