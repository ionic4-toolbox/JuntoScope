import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectComponent } from '@app/connections/containers/connect/connect.component';
import { TeamworkComponent } from '@app/connections/containers/teamwork/teamwork.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectComponent,
  },
  {
    path: 'teamwork',
    component: TeamworkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionsRoutingModule {}
