import { PreloadingStrategy, Route } from '@angular/router';
import {Observable} from 'rxjs';

export class PreloadSelectedModuledsList implements PreloadingStrategy {

  preload(route: Route, load: Function): Observable<any> {
    return route.data.preload ? load() : null;
  }

}
