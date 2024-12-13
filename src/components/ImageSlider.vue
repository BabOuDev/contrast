<template>
  <div class="slider-group">
    <h3 :style="{ color: color }">{{ title }}</h3>
    <input 
      type="range" 
      min="-100" 
      max="100" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="['slider', `${type}-slider`]"
    >
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    modelValue: {
      type: [Number, String],
      required: true
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>

<style lang="scss" scoped>
.slider-group {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    font-weight: 500;
  }
  
  p {
    color: #666;
    font-size: 14px;
    margin-top: 10px;
  }
}

.slider {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
}

.brightness-slider::-webkit-slider-thumb {
  background: #4CAF50;
}

.contrast-slider::-webkit-slider-thumb {
  background: #2196F3;
}
</style>