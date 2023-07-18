import type {
  Asset,
  EntrySkeletonType,
  EntryFields,
  EntryFieldTypes,
} from "contentful";

export interface TypeInfoPagesFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  pageTitleName?: EntryFieldTypes.Symbol;
  pageTitleDescription?: EntryFieldTypes.Symbol;
  pageImage?: Asset;
  pageContent: EntryFieldTypes.RichText;
  activeSidebar: EntryFieldTypes.Boolean;
}

export type TypeInfoPages = EntrySkeletonType<TypeInfoPagesFields, "infoPages">;
