<template>
  <div class="file-input">
    <div class="file-name">{{ fileName || 'NAME' }}</div>
    <label class="upload-button">
      <input 
        type="file" 
        @change="handleFileUpload" 
        accept="image/*"
        class="hidden"
      >
      UPLOAD
    </label>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  props: {
    fileName: {
      type: String,
      default: ''
    }
  },
  emits: ['file-selected'],
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (file) {
        this.$emit('file-selected', file)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.file-input {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  .file-name {
    flex: 1;
    padding: 12px;
    background: #f5f5f5;
    border-radius: 8px;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
  }
  
  .upload-button {
    padding: 12px 24px;
    background: #2196F3;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    
    &:hover {
      background: #1976D2;
    }
  }
}

.hidden {
  display: none;
}
</style>