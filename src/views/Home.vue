<template>
  <div>
    {{result}}
  </div>
</template>
<script>
import course from '../lib'
export default {
  data () {
    return {
      startPosition: [115.229415,31.210068],
      endPosition: [116.569747,29.216513],
      result: ''
    }
  },
  created () {
    this.result = course(this.startPosition, this.endPosition)
  }
}
</script>
