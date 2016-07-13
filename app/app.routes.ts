import { provideRouter, RouterConfig } from '@angular/router';

import { SchedulerComponent } from './scheduler.component';
import { BatchImportComponent } from './batchimport.component';
import { ImportComponent } from './import.component';

const routes: RouterConfig = [
    { path: 'scheduler', component: SchedulerComponent },
    { path: 'batch-import', component: BatchImportComponent },
    { path: 'import', component: ImportComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];