import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface UnsplashResp {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResp>('https://api.unsplash.com/photos/random', {
       headers:
        {Authorization: 'Client-ID NzJojZAecyUtKGEzIx_1pM_s0MdHrVHnFR_YoUTRPDA'}
    } );
  }
}
