export function truncate(value) {
  if (value < 0) return 0
  if (value > 255) return 255
  return value
}

export function adjustBrightness(imageData, brightness) {
  const brightnessAdjust = brightness * 2.55
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] += brightnessAdjust     // Red
    imageData.data[i + 1] += brightnessAdjust // Green
    imageData.data[i + 2] += brightnessAdjust // Blue
  }
  return imageData
}

export function adjustContrast(imageData, contrast) {
  const contrastFactor = (259 * (contrast/2 + 255)) / (255 * (259 - contrast/2))
  for (let i = 0; i < imageData.data.length; i += 4) {
    imageData.data[i] = truncate(contrastFactor * (imageData.data[i] - 128) + 128)
    imageData.data[i + 1] = truncate(contrastFactor * (imageData.data[i + 1] - 128) + 128)
    imageData.data[i + 2] = truncate(contrastFactor * (imageData.data[i + 2] - 128) + 128)
  }
  return imageData
}