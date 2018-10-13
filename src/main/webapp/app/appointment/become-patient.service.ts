import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { BecomePatient, IPatient } from 'app/shared/model/patient.model';

type EntityResponseType = HttpResponse<IPatient>;

@Injectable({ providedIn: 'root' })
export class BecomePatientService {
    private resourceUrl = SERVER_API_URL + 'api/become-patient';

    constructor(private http: HttpClient) {}

    save(patient: BecomePatient): Observable<EntityResponseType> {
        return this.http.post<IPatient>(this.resourceUrl, patient, { observe: 'response' });
    }
}
