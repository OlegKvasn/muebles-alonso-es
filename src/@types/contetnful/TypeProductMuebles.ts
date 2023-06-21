import type { Asset, EntrySkeletonType, EntryFields, EntryFieldTypes } from "contentful";

export interface TypeProductMueblesFields {
    title: EntryFieldTypes.Symbol;
    titleSlug: EntryFieldTypes.Symbol;
    category: "armarios" | "auxiliar" | "butacas" | "comedor" | "dormitorios" | "juvenil" | "salones" | "sofas";
    images: Asset[];
    materials?: EntryFieldTypes.Symbol[];
    isOferta: "normal" | "oferta";
    price?: EntryFieldTypes.Number;
    priceBefore?: EntryFieldTypes.Number;
    description?: EntryFieldTypes.RichText;
}

export type TypeProductMuebles = EntrySkeletonType<TypeProductMueblesFields, 'productMuebles'>;
