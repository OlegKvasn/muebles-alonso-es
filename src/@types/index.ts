import { Document } from "@contentful/rich-text-types";

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

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
  images: ContentImage[] | null;
  materials?: string[] | null;
  isOferta: "oferta" | "normal";
  price?: string | null;
  priceBefore?: string | null;
  description?: Document | null | undefined;
}

export interface Category {
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
  slug: string;
  images: ContentImage[] | null;
  description?: string | null;
}
export interface InfoPages {
  title: string;
  slug: string;
  pageTitleName?: string | null;
  pageTitleDescription?: string | null;
  pageImage?: ContentImage | null;
  pageContent: Document;
  activeSidebar: boolean;
}
