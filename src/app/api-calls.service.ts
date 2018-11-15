import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

	BASE_URL :String="https://pixabay.com/api";
	resourceKeyUrl:string;

  	constructor(private http:Http) { }

  	//set account's key
  	setKeyValue(keydata){
		this.resourceKeyUrl=keydata;
  	}

  	//service to get the image from pixbay server
  	getMethod(params) {
	  const url = this.BASE_URL + "/" + this.resourceKeyUrl + params;
	  return this.http
	  .get(url)
	  .pipe(map((res: Response) => res.json()));
	}
}
