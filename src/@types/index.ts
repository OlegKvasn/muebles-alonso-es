import { Document } from "@contentful/rich-text-types";

export type ContentImage = [
  {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
];
export interface ProductMuebles {
  title: string;
  titleSlug: string;
  category:
    | "armarios"
    | "auxiliar"
    | "butacas"
    | "comedor"
    | "dormitorios"
    | "juvenil"
    | "salones"
    | "sofas";
  images: ContentImage | null;
  materials?: string[] | null;
  isOferta: "oferta" | "normal";
  price?: number | null;
  priceBefore?: number | null;
  description?: Document | null | undefined;
}
