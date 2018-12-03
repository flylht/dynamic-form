<template>
<div class="form">
    <el-form ref="form" :model="value" label-width="80px" :size="value.size" :inline="value.inline">
      <dynamic-form-item
       v-for="item in value.formItemList"
       :key="item.key"
       v-if="item.key!==undefined"
       :item="item" />
    </el-form>
  </div>
</template>

<script>
import dynamicFormItemOld from '@/components/dynamic-form/DynamicFormItemOld'

export default {
  name: 'dynamicForm',
  components:{
    'dynamic-form-item': dynamicFormItemOld
  },
  props: {
    config: {
     type: Object,
     required: true
    },
    value: {
     type: Object,
     required: true
    }
  },
  data () {
    return {
      radio10:''
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  mounted(){
    //this.setDefaultValue()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
