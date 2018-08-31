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
      startPosition: [120.899374,29.895202],
      endPosition: [120.900833,29.895202],
      result: ''
    }
  },
  created () {
    this.result = course(this.startPosition, this.endPosition)
  }
}
</script>
