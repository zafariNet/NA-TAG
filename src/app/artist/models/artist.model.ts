import { Bio } from './bio.model';
import { Tag } from './tag.model';

import Image from './image.model';
import { Stats } from './stats.model';

export default interface Artist {
  listeners: string;
  mbid: string;
  name: string;
  streamable: string;
  url: string;
  image: Image[];
  ontour: string;
  stats: Stats;
  similar: Artist[];
  tags: Tag[];
  bio: Bio;
}
