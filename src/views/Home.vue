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
      startPosition: [120.922248,29.894124],
      endPosition: [120.924222,29.894086],
      result: ''
    }
  },
  created () {
    this.result = course(this.startPosition, this.endPosition)
  }
}
</script>
