import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { Store } from 'src/store';

export const AdminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store);
  const user = store.value.user;
  console.log(user);

  if (user == null || user.role !== 'ADMIN') {
    router.navigate(['./auth/login']);

    return false;
  }

  return true;
};
