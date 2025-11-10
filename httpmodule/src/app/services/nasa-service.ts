import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
@Injectable({
providedIn: 'root'
})
export class NasaService {
constructor(private http: HttpClient) {}
getApod() {
return this.http.get(`https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=yboAaixTuBrcYQzzQGnMRVvcDU0szrlfbvJOvcgS}`);
}
}