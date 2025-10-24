import { Injectable } from '@angular/core';
import { Painel } from '../models/painel';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
	providedIn: 'root'
})
export class PainelService {

	constructor(private httpClient: HttpClient) { }


	listar(params?: HttpParams | any): Observable<Painel[]> {
		return this.httpClient.get<Painel[]>(environment.url_back + '/painel/', { params: params });
	}
}
