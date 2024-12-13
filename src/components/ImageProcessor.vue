<template>
  <div class="image-processor">
    <Header 
      title="Brightness & Contrast Developer Test"
      dateRange="01 Jun, 2018 - 31 Dec, 2019"
    />

    <div class="main-content">
      <div class="profile-image">
        <img src="/profile.png" alt="Profile" />
      </div>

      <div class="controls">
        <ImageSlider
          title="Brightness"
          description="Slide to adjust image brightness!☀️"
          v-model="brightness"
          type="brightness"
          color="#4CAF50"
        />

        <ImageSlider
          title="Contrast"
          description="Slide to adjust image contrast!🌗"
          v-model="contrast"
          type="contrast"
          color="#2196F3"
        />
      </div>

      <div class="image-preview">
        <canvas ref="canvas" :width="imageWidth" :height="imageHeight"></canvas>
      </div>

      <FileUpload
        :fileName="fileName"
        @file-selected="handleFileUpload"
      />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import ImageSlider from './ImageSlider.vue'
import FileUpload from './FileUpload.vue'
import { adjustBrightness, adjustContrast } from '../utils/imageProcessing'

export default {
  name: 'ImageProcessor',
  components: {
    Header,
    ImageSlider,
    FileUpload
  },
  data() {
    return {
      brightness: 0,
      contrast: 0,
      imageWidth: 750,
      imageHeight: 500,
      originalImageData: null,
      fileName: '',
      image: null
    }
  },
  methods: {
    handleFileUpload(file) {
      this.fileName = file.name
      const reader = new FileReader()
      
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          this.image = img
          this.drawImage()
          this.saveOriginalImageData()
        }
        img.src = e.target.result
      }
      
      reader.readAsDataURL(file)
    },

    drawImage() {
      const ctx = this.$refs.canvas.getContext('2d')
      ctx.clearRect(0, 0, this.imageWidth, this.imageHeight)
      
      // Calculate dimensions to maintain aspect ratio
      const scale = Math.min(
        this.imageWidth / this.image.width,
        this.imageHeight / this.image.height
      )
      const width = this.image.width * scale
      const height = this.image.height * scale
      const x = (this.imageWidth - width) / 2
      const y = (this.imageHeight - height) / 2
      
      ctx.drawImage(this.image, x, y, width, height)
    },

    saveOriginalImageData() {
      const ctx = this.$refs.canvas.getContext('2d')
      this.originalImageData = ctx.getImageData(0, 0, this.imageWidth, this.imageHeight)
    },

    updateImage() {
      if (!this.originalImageData) return

      const ctx = this.$refs.canvas.getContext('2d')
      const imageData = new ImageData(
        new Uint8ClampedArray(this.originalImageData.data),
        this.imageWidth,
        this.imageHeight
      )

      adjustBrightness(imageData, this.brightness)
      adjustContrast(imageData, this.contrast)

      ctx.putImageData(imageData, 0, 0)
    }
  },
  watch: {
    brightness() {
      this.updateImage()
    },
    contrast() {
      this.updateImage()
    }
  }
}
</script>

<style lang="scss" scoped>
.image-processor {
  width: 750px;
  height: 1564px;
  margin: 0 auto;
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  flex-direction: column;
}

.main-content {
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 60px;
  overflow: hidden;
  margin: -90px auto 20px;
  border: 4px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-preview {
  margin: 20px 0;
  border-radius: 12px;
  overflow: hidden;
  
  canvas {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>