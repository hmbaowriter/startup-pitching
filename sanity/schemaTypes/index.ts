import { type SchemaTypeDefinition } from "sanity";

import { authorType } from "./authorType";
import { startupType } from "./startupType";
import { playlistType } from "./playlistType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, startupType, playlistType],
};
