/**
 * Created by Marek.Hlavacek on 6/16/2016.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    appRouterProviders])
.catch(err => console.error(err));
