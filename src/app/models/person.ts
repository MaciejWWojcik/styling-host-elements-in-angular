export interface Person {
  avatar: string;
  name: string;
  lastName: string;
  tags: string[];
  description: string;
  promoted?: boolean;
}

export type TileState = 'active' | 'disabled' | 'regular';

export interface PersonTile extends Person {
  state: TileState;
}
