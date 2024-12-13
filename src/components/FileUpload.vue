<template>

    <div class="file-input">
      <div class="file-name">{{ fileName || '' }}</div>
      <label class="upload-button">
        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.07114 0.471551C4.46252 -0.157015 5.37752 -0.157016 5.76891 0.47155L9.6889 6.76702C10.1037 7.43312 9.6247 8.29559 8.84002 8.29559H1.00002C0.21534 8.29559 -0.263625 7.43312 0.151139 6.76702L4.07114 0.471551Z" fill="#4A90E2" fill-opacity="0.78"/>
        </svg>
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
  margin-top: 15px;
  font-family: Graphik-regular;

  .file-name {
    flex: 1;
    padding: 7px 16px 5px 76px;
    border: 1px solid #DCDEE4;
    border-radius: 5px;
    color: #25A95B;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 11px;
    position: relative;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      padding: 7px 0;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
      content: "NAME";
      font-size: 11px;
      background-color: #F6F8FA;
      height: calc(100% - 14px);
      color: #8392A6;
      width: 60px;
      border-right: 1px solid #DCDEE4;
      text-align: center;
    }
  }

  .upload-button {
    padding: 7px 24px 5px;
    background: #F6F8FA;
    color: #2196F3;
    font-size: 11px;
    border: 1px solid #DCDEE4;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: #DCDEE4;
    }
  }
}
.hidden {
  display: none;
}
</style>