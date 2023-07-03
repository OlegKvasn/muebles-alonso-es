import type {
  Asset,
  EntrySkeletonType,
  EntryFields,
  EntryFieldTypes,
} from "contentful";

export interface TypeCategoryFields {
  category:
    | "armarios"
    | "auxiliar"
    | "butacas"
    | "comedor"
    | "dormitorios"
    | "juvenil"
    | "salones"
    | "sofas"
    | "ofertas";
  slug: EntryFieldTypes.Symbol;
  images: Asset[];
  description?: EntryFieldTypes.Symbol;
}

export type TypeCategory = EntrySkeletonType<TypeCategoryFields, "category">;
