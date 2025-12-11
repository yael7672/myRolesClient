import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { EventsService } from '../../../core/services/events/events.service';
import { EventItem } from '../../../core/interfaces/event';

@Component({
  standalone: true,
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class EventDetailsComponent {
  private route = inject(ActivatedRoute);
  private eventsService = inject(EventsService);

  event$!: Observable<EventItem | undefined>;

  constructor() {
    this.event$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') ?? '';
        return this.eventsService.getEventById(id);
      })
    );
  }
}
