import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { Store } from 'src/store';

export const UserGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);
  const user = store.value.user;

  if (user == null) {
    router.navigate(['./auth/login']);

    return false;
  }

  return true;
};
