export type EventCategory = 'kids' | 'music' | 'theatre' | 'standup' | 'other';

export interface EventItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  date: string;         
  time: string;
  location: string;
  hallName: string;
  basePrice: number;
  category: EventCategory;
  imageUrl?: string;
}
