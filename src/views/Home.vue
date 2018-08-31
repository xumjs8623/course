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
      startPosition: [120.892164,29.895426],
      endPosition: [120.884481,29.893088],
      result: ''
    }
  },
  created () {
    this.result = course(this.startPosition, this.endPosition)
  }
}
</script>
