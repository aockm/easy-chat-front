<template>
  <div>
    <Dialog
      :show="dialogConfig.show"
      :title="dialogConfig.title"
      :buttons="dialogConfig.buttons"
      width="400px"
      :showCancel="false"
      @close="dialogConfig.show = false">
      <el-form
        :model="formData"
        :rules="rules"
        ref="formDataRef"
        @submit.prevent>
        <el-form-item 
            :model="formData"
            :rules="rules"
            ref="formDataRef"
            lab-width="80px"
            @submit.prevent>
            <el-input 
                type="textarea" 
                :rows="5"
                clearable
                placeholder="请输入申请信息，更容易被通过" 
                resize="none"
                show-word-limit
                maxlength="100"
                v-model.trim="formData.applyInfo">
            </el-input>
        </el-form-item>
      
      </el-form>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
import {useUserInfoStore} from '@/stores/UserInfoStore'
import { useContacteStateStore } from "@/stores/ContactStateStore";


const { proxy } = getCurrentInstance();
const userInfoStore = useUserInfoStore()
const contactStateSotre = useContacteStateStore()
const formData = ref({});
const formDataRef = ref();
const rules = {
    title: [{required: true, message: "请输入内容"}]
}

const dialogConfig = ref({
    show: false,
    title: '提交申请',
    buttons: [
        {
            type: 'primary',
            text: '确定',
            click: (e) => {
                submitApply()
            }
        }
    ]    
})

const emit = defineEmits(['reload'])

const submitApply = async ()=>{
    const {contactId,contactType,applyInfo} = formData.value;
    let result = await proxy.Request({
       url: proxy.Api.applyAdd,
       params:{
        contactId,
        applyInfo,
       }
    })
    if(!result){
      return;
    }
    if(result.data==0) {
        proxy.Message.success("加入成功");
        contactStateSotre.setContactReload(contactType)
    }else {
        proxy.Message.success("申请成功，等待对方同意");
    }
    dialogConfig.value.show = false;
    emit("reload")
    // if(result.data == 0 ){
        
    // }
}

const show = (data)=>{
    dialogConfig.value.show = true
    nextTick(()=>{
        formDataRef.value.resetFields();
        formData.value = Object.assign({},data);
        formData.value.applyInfo = "我是"+userInfoStore.getInfo().nickName
    })
}
defineExpose({
    show
})
</script>

<style lang="scss" scoped>
</style>
