import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  TemplateRef,
} from '@angular/core';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';
import ArtistService from 'src/app/artist/services/artist.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SearchResultComponent } from 'src/app/artist/search/search-result.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private artistService: ArtistService,
    private modalService: BsModalService
  ) {}
  @ViewChild('searchBox', { static: true }) searchBox: ElementRef;
  @ViewChild('search', { static: true })
  search: SearchResultComponent;
  ngOnInit(): void {}

  searchArtist(value: string) {
    debugger;
    this.artistService.searchArtist(value).subscribe((response) => {
      this.search.show(response);
    });
  }
  onToggleSidenav() {}
}
