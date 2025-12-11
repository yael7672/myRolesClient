import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventShowtime } from '../../interfaces/showtime';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  // MOCK – כאן בהמשך יהיה API ל-SQL Server
  private readonly mockShowtimes: EventShowtime[] = [
    {
      id: 's1',
      eventId: '1',
      date: '2025-02-15',
      time: '18:00',
      hallName: 'אולם גדול',
      basePrice: 120,
    },
    {
      id: 's2',
      eventId: '1',
      date: '2025-02-15',
      time: '21:00',
      hallName: 'אולם גדול',
      basePrice: 140,
    },
    {
      id: 's3',
      eventId: '2',
      date: '2025-02-20',
      time: '17:30',
      hallName: 'אולם ילדים',
      basePrice: 70,
    },
    {
      id: 's4',
      eventId: '3',
      date: '2025-03-01',
      time: '21:00',
      hallName: 'אולם ראשי',
      basePrice: 140,
    },
  ];

  getShowtimesForEvent(eventId: string): Observable<EventShowtime[]> {
    const list = this.mockShowtimes.filter(s => s.eventId === eventId);
    return of(list);
  }
}
