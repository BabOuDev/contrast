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
      :style="{background: gradient}"
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
  emits: ['update:modelValue'],
  computed: {
    gradient(){
      return `linear-gradient(to right, ${this.color} ${this.modelValue/2+50}%, ${this.color}40 ${this.modelValue/2+50}%)`;
    },
  }
}
</script>

<style lang="scss" scoped>
.slider-group {
  background: white;
  padding: 0 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h3 {
    font-size: 18px;
    margin-bottom: 0px;
    font-weight: 500;
  }
  
  p {
    color: #42506B;
    font-size: 14px;
    font-family: Graphik-regular;
    margin-top: 10px;
    margin-bottom: 4px;
  }
}


.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: #25A95B;
  border-radius: 5px;
  outline: none;
  position: relative;
  box-shadow: none;
  transition: all 0.3s;
}

/* Progress bar */
.slider::-webkit-slider-runnable-track {
  height: 20px;
  border-radius: 5px;
}

/* Thumb (circle) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;
  box-shadow: none;
}



.brightness-slider::-webkit-slider-thumb {
  background: #4CAF50;
}

.contrast-slider::-webkit-slider-thumb {
  background: #2196F3;
}
</style>