import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
},{
    path:'home',
component:HomeComponent
},{
    path:'profile',
    component:ProfileComponent
},
{
    path:'user',
    component:UserComponent
},
{
    path:'contact',
    component:ContactComponent
}
];
