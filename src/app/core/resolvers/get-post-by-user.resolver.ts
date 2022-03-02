import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';

import { PostService } from '../../profile/usuario/services/post.service';
import * as fromApp from 'src/app/state/app.state';
import { getCurrentUser } from '../../authentication/store/index';
import { Usuario } from '../models/usuario.model';
import { take } from 'rxjs/operators';

@Injectable()
export class GetPostByUserResolver implements Resolve<any> {

  constructor(
    private postService: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.postService.getPostByIdUser().pipe((take(1)))

  }
}
