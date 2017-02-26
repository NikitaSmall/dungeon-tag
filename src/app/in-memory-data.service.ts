import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let notes = [
      { id: 1, title: 'First note', text: 'Dungeon notes are cool!', tags: ['dungeon', 'test'] },
      { id: 2, title: 'Second note', text: 'I like it', tags: ['test'] }
    ];

    return { notes };
  }
}
