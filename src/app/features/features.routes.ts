import { Routes } from '@angular/router';
import { inject } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { MyTicketsComponent } from './profile/my-tickets/my-tickets.component';

import { ChooseShowtimeComponent } from './booking/choose-showtime/choose-showtime.component';
import { ChooseSeatsComponent } from './booking/choose-seats/choose-seats.component';
import { CheckoutComponent } from './booking/checkout/checkout.component';
import { ConfirmationComponent } from './booking/confirmation/confirmation.component';

import { AuthGuard } from '../core/guards/auth.guard';

export const FEATURES_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsListComponent,
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
  },
  {
    path: 'profile/my-tickets',
    canActivate: [() => inject(AuthGuard).canActivate()],
    component: MyTicketsComponent,
  },
  {
    path: 'booking/:eventId',
    component: ChooseShowtimeComponent,
  },
  {
    path: 'booking/:eventId/seats',
    component: ChooseSeatsComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
];
