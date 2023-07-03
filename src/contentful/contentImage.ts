import { Asset } from "contentful";
import { ContentImage } from "@/@types";

export function parseContentfulContentImage(
  assets?: Asset<undefined, string>[]
) {
  if (!assets) {
    return null;
  }
  if (!("fields" in assets[0])) {
    return null;
  }
  return assets.map((asset) => ({
    src: asset.fields.file?.url || "",
    alt: asset.fields.description || "",
    width: asset.fields.file?.details.image?.width || 0,
    height: asset.fields.file?.details.image?.height || 0,
  })) as ContentImage[] | null;
}
