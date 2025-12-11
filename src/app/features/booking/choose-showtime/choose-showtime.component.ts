import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BookingService } from '../../../core/services/booking/booking.service';
import { EventShowtime } from '../../../core/interfaces/showtime';
import { EventsService } from '../../../core/services/events/events.service';
import { EventItem } from '../../../core/interfaces/event';

@Component({
  standalone: true,
  selector: 'app-choose-showtime',
  templateUrl: './choose-showtime.component.html',
  styleUrls: ['./choose-showtime.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ChooseShowtimeComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private bookingService = inject(BookingService);
  private eventsService = inject(EventsService);

  event$!: Observable<EventItem | undefined>;
  showtimes$!: Observable<EventShowtime[]>;

  constructor() {
    this.event$ = this.route.paramMap.pipe(
      switchMap(params => {
        const eventId = params.get('eventId') ?? '';
        return this.eventsService.getEventById(eventId);
      })
    );

    this.showtimes$ = this.route.paramMap.pipe(
      switchMap(params => {
        const eventId = params.get('eventId') ?? '';
        return this.bookingService.getShowtimesForEvent(eventId);
      })
    );
  }

  selectShowtime(eventId: string, showtimeId: string) {
    this.router.navigate(
      ['/booking', eventId, 'seats'],
      { queryParams: { showtimeId } }
    );
  }
}
