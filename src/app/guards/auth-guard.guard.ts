import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const user = localStorage.getItem('currentUser');
  if (user) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
