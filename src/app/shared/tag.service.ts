import { Injectable } from '@angular/core';

import { Tag } from './tag.model';
import { TAGS } from './tag-mock';

@Injectable()
export class TagService {
  getTags(): Promise<Tag[]> {
    return Promise.resolve(TAGS);
  }
}
