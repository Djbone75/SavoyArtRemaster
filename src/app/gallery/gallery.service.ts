import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Gallery } from 'src/models/gallery.model';
import { environment } from '../../environments/environment';
import { Store } from 'src/store';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  BACKEND_URL = environment.apiUrl + '/gallery/';
  private updatedGallery: Gallery[] = [];
  constructor(
    private router: Router,
    private store: Store,
    private http: HttpClient
  ) {}

  getGalleries() {
    this.http
      .get<{ galleries: Gallery[] }>(this.BACKEND_URL)
      .pipe(
        map((galleryData) => {
          return {
            galleries: galleryData.galleries.map((gallery) => {
              return {
                title: gallery.title,
                content: gallery.content,
                id: gallery.id,
                path: gallery.path,
              };
            }),
          };
        })
      )
      .subscribe((transformedGalleryData) => {
        this.updatedGallery = transformedGalleryData.galleries;

        this.store.set('gallery', this.updatedGallery);
      });
  }
  addGallery(title: string, content: string, image: File) {
    const galleryData = new FormData();
    galleryData.append('title', title);
    galleryData.append('content', content);
    galleryData.append('image', image);
    this.http
      .post<{ message: string; gallery: Gallery }>(
        this.BACKEND_URL,
        galleryData
      )
      .subscribe((responseData) => {
        this.updatedGallery = [...this.updatedGallery, responseData.gallery];
        this.store.set('gallery', this.updatedGallery);
        this.router.navigate(['/']);
      });
  }

  deleteGallery(galleryId: string) {
    return this.http.delete(this.BACKEND_URL + galleryId);
  }
}
