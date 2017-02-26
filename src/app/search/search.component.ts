import { Component, OnInit } from '@angular/core';

import { Tag } from '../shared/tag.model';
import { TagService } from '../shared/tag.service';

@Component({
  moduleId: module.id,
  selector: 'dungeon-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  tags: Tag[] = [];
  selectedTags: Tag[] = [];

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.tagService.getTags()
      .then(tags => this.tags = tags);
  }

  onTagSelect(tag: Tag): void {
    let index = this.selectedTags.indexOf(tag);

    if (index === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(index, 1);
    }
  }
}
