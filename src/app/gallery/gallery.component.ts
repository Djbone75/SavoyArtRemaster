import { Component } from '@angular/core';
import { Gallery } from 'src/models/gallery.model';
import { GalleryService } from './gallery.service';
import { Store } from 'src/store';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  constructor(private galleryService: GalleryService, private store: Store) {
    this.galleryService.getGalleries();
  }
  gallery: Gallery[] = [];
  GallerySub$ = this.store.select<Gallery[]>('gallery').subscribe((gallery) => {
    this.gallery = gallery;
  });
}
