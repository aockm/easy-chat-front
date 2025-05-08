<template>
  
  <div>
    <el-form
      :model="formData"
      :rules="rules"
      ref="formDataRef"
      label-width="80px"
      @submit.prevent
    >
    <!--input输入-->
      <el-form-item label="" prop="" >
        <el-input clearable placeholder="提示信息" v-model.trim="formData.email"></el-input>
      </el-form-item>
    
    </el-form>
  </div>
  
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();
const formData = ref({});
const formDataRef = ref();
const rules = {
  title: [{ required: true, message: "请输入内容" }],
};
</script>

<style lang="scss" scoped>
</style>
