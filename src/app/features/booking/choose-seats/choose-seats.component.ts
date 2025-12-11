import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

type SeatStatus = 'available' | 'selected' | 'reserved';

interface Seat {
  row: number;
  number: number;
  status: SeatStatus;
}

@Component({
  standalone: true,
  selector: 'app-choose-seats',
  templateUrl: './choose-seats.component.html',
  styleUrls: ['./choose-seats.component.scss'],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class ChooseSeatsComponent {
  seats: Seat[][] = [];
  selectedCount = 0;

  showConfirmPopup = false;

  constructor(private router: Router) {
    this.buildSeats();
  }

  private buildSeats() {
    const rows = 5;
    const cols = 10;

    for (let r = 1; r <= rows; r++) {
      const row: Seat[] = [];
      for (let c = 1; c <= cols; c++) {
        const isReserved = (r === 2 && c === 5) || (r === 3 && c === 7);

        row.push({
          row: r,
          number: c,
          status: isReserved ? 'reserved' : 'available',
        });
      }
      this.seats.push(row);
    }
  }

  toggleSeat(seat: Seat) {
    if (seat.status === 'reserved') return;

    if (seat.status === 'available') {
      seat.status = 'selected';
      this.selectedCount++;
    } else if (seat.status === 'selected') {
      seat.status = 'available';
      this.selectedCount--;
    }
  }

  openConfirm() {
    if (this.selectedCount > 0) {
      this.showConfirmPopup = true;
    }
  }

  closeConfirm() {
    this.showConfirmPopup = false;
  }

  confirmBooking() {
    this.showConfirmPopup = false;
    this.router.navigate(['/checkout']);
  }
}
