import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AboutComponent } from './components/about/about.component';
 
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'manage',
        component: ManageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);