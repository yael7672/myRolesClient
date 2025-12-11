import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventItem } from '../../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  // בינתיים MOCK – בהמשך נחליף לקריאה ל-API אמיתי
  private readonly mockEvents: EventItem[] = [
    {
      id: '1',
      title: 'ערב ג\'אז בתיאטרון העירוני',
      shortDescription: 'מופע ג\'אז אינטימי עם הרכב חי.',
      longDescription:
        'מופע ג\'אז מיוחד עם הרכב של 6 נגנים, כולל קלאסיקות לצד עיבודים מודרניים. מתאים לגיל 16+.',
      date: '2025-02-15',
      time: '20:30',
      location: 'מרכז תרבות העיר',
      hallName: 'אולם גדול',
      basePrice: 120,
      category: 'music',
      imageUrl: 'assets/images/events/jazz-night.jpg',
    },
    {
      id: '2',
      title: 'הצגת ילדים – האריה שאהב תות',
      shortDescription: 'הצגה מוזיקלית צבעונית לכל המשפחה.',
      longDescription:
        'הצגה מוזיקלית שמבוססת על סיפור הילדים המוכר, עם שירים מקוריים ותלבושות מרהיבות. מתאים מגיל 3.',
      date: '2025-02-20',
      time: '17:30',
      location: 'בית התרבות מרכז',
      hallName: 'אולם ילדים',
      basePrice: 70,
      category: 'kids',
      imageUrl: 'assets/images/events/lion-show.jpg',
    },
    {
      id: '3',
      title: 'סטנדאפ – לילה של צחוק',
      shortDescription: 'סטנדאפיסטים מהשורה הראשונה על במה אחת.',
      longDescription:
        'מופע סטנדאפ למבוגרים בלבד עם שלושה סטנדאפיסטים אורחים. מיועד לגיל 18+.',
      date: '2025-03-01',
      time: '21:00',
      location: 'היכל התרבות',
      hallName: 'אולם ראשי',
      basePrice: 140,
      category: 'standup',
      imageUrl: 'assets/images/events/standup-night.jpg',
    },
  ];

  getEvents(): Observable<EventItem[]> {
    // בהמשך זה יהיה HttpClient.get<...>()
    return of(this.mockEvents);
  }

  getEventById(id: string): Observable<EventItem | undefined> {
    const ev = this.mockEvents.find(e => e.id === id);
    return of(ev);
  }
}
