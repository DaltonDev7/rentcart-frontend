import { createAction, props } from '@ngrx/store';
import { LoginDTO } from 'src/app/core/models/login-dto';

export const LoginStart = createAction(
    '[Login] LOGIN_START',
    props<{ payload: LoginDTO }>()
);




