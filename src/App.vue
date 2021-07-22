<template>
  <div>

  </div>
</template>
<script>
import {ref} from 'vue'
import MySelect from './component/parent'
export default {
  setup () {
    /*
    * 
    */
    const curIdx = ref(1)
    const data =[
      {
        id:1,
        value:'orange',
        text:'橙子'
      },
      {
        id:2,
        value:'apple',
        text:'苹果'
      }
    ]
    const setOption = (index,item)=>{
      console.log(`index,item`, index,item)
    }
    return {
      curIdx,
      data,
      setOption
    }
  },
  components:{
    MySelect
  }
}
</script>

<style  scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>