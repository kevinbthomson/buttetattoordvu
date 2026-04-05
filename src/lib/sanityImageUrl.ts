import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';

const builder = createImageUrlBuilder({
  projectId: 'f70v9lhe',
  dataset: 'production',
});

/** CDN URL for a Sanity image field, sized for the grid (square crop). */
export function urlForSanityImage(
  source: SanityImageSource | null | undefined,
  width: number,
): string | undefined {
  if (!source) return undefined;
  return builder
    .image(source)
    .width(width)
    .height(width)
    .fit('crop')
    .format('webp')
    .url();
}
