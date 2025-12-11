import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { EventsService } from '../../core/services/events/events.service';
import { EventItem } from '../../core/interfaces/event';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class HomeComponent {
  private eventsService = inject(EventsService);

  featuredEvents$!: Observable<EventItem[]>;

  constructor() {
    this.featuredEvents$ = this.eventsService.getEvents().pipe(
      map(events => events.slice(0, 2)) // שני הראשונים – "מומלצים"
    );
  }
}
