import sharp from 'sharp'

export async function processSlideImage(inputBuffer: Buffer): Promise<Buffer> {
  const image = sharp(inputBuffer).rotate()

  const metadata = await image.metadata()
  const width = metadata.width ?? 0
  const height = metadata.height ?? 0

  if (!width || !height) {
    throw new Error('Unable to read image dimensions')
  }

  // Very simple crop strategy for MVP:
  // trim surrounding noise a bit, then normalize.
  // Replace later with edge detection if needed.
  return await image
    .trim()
    .normalize()
    .modulate({
      brightness: 1.03,
      saturation: 1.08,
    })
    .sharpen()
    .jpeg({ quality: 90 })
    .toBuffer()
}