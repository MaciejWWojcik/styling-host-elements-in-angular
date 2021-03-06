import { Component, HostBinding, Input } from '@angular/core';
import { Person, TileState } from '../models/person';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() person: Person | undefined;

  @HostBinding('class.highlighted') get promoted(): boolean {
    return !!this.person?.promoted;
  }

  @Input() @HostBinding('attr.data-state') state: TileState = 'regular';

}
