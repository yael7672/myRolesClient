import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { EventsService } from '../../../core/services/events/events.service';
import { EventItem, EventCategory } from '../../../core/interfaces/event';

@Component({
  standalone: true,
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class EventsListComponent {
  private eventsService = inject(EventsService);
  private router = inject(Router);

  events: EventItem[] = [];
  filteredEvents: EventItem[] = [];

  searchTerm = '';
  selectedCategory: EventCategory | 'all' = 'all';

  categories: { key: EventCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'הכול' },
    { key: 'music', label: 'מוזיקה' },
    { key: 'theatre', label: 'תיאטרון' },
    { key: 'kids', label: 'ילדים' },
    { key: 'standup', label: 'סטנדאפ' },
    { key: 'other', label: 'אחר' },
  ];

  ngOnInit() {
    this.eventsService.getEvents().subscribe(ev => {
      this.events = ev;
      this.applyFilters();
    });
  }

  applyFilters() {
    const term = this.searchTerm.trim().toLowerCase();

    this.filteredEvents = this.events.filter(e => {
      const matchCategory =
        this.selectedCategory === 'all' || e.category === this.selectedCategory;

      const inText =
        !term ||
        e.title.toLowerCase().includes(term) ||
        e.location.toLowerCase().includes(term) ||
        e.longDescription.toLowerCase().includes(term);

      return matchCategory && inText;
    });
  }

  onSearchChange(value: string) {
    this.searchTerm = value;
    this.applyFilters();
  }

  onCategoryChange(cat: EventCategory | 'all') {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  goToEventDetails(event: EventItem) {
    this.router.navigate(['/events', event.id]);
  }
}
