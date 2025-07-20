<template>
  <el-form
    :model="formData"
    :rules="rules"
    ref="formDataRef"
    label-width="80px"
    @submit.prevent
  >
    <!--input输入-->
    <el-form-item label="群名称" prop="groupName" >
        <el-input maxlength="150" clearable placeholder="请输入群名称" v-model.trim="formData.groupName"></el-input>
    </el-form-item>
    <el-form-item label="封面" prop="avatarFile" >
        <AvatarUpload 
        ref="avatarUploadRef"
        v-model="formData.avatarFile"   
        @coverFile="saveCover"
        ></AvatarUpload>
    </el-form-item>
      
    <el-form-item label="加入权限" prop="joinType">
        <el-radio-group v-model="formData.joinType">
            <el-radio :label="1">管理员同意后加入</el-radio>
            <el-radio :label="0">直接加入</el-radio>
        </el-radio-group>
    </el-form-item>
    <el-form-item label="公告" prop="gorupNotice">
        <el-input maxlength="300" clearable placeholder="请输入群公告" 
        type="textarea"
        rows="5"
        :show-word-limit="true"
        resize="none"
        v-model.trim="formData.gorupNotice">
        </el-input>
        
    </el-form-item>
    
    <el-form-item >
        <el-button type="primary" @click="submit">
            {{ formData.groupId?'修改群组':'创建群组' }}
        </el-button>
    </el-form-item>
    
    
  </el-form>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();
import { useContacteStateStore } from "@/stores/ContactStateStore";
const  contactStateSotre = useContacteStateStore()
const formData = ref({});
const formDataRef = ref();
const rules = {
  groupName: [{ required: true, message: "请输入群名称" }],
  joinType: [{ required: true, message: "请选择加入权限" }],
//   avatarFile: [{ required: true, message: "请选择群头像" }],
};

const emit = defineEmits(['editBack'])
const submit = async ()=>{
    formDataRef.value.validate(async (valid) => {
        if (!valid) {
            return;
        }
        let params = {};
        Object.assign(params, formData.value);
        let result = await proxy.Request({
            url: proxy.Api.saveGroup,
            params,
        });
        if (!result) {
            return;
        }
        if(params.groupId){
            proxy.Message.success("群组修改成功");
            emit('editBack');
        }else{
            proxy.Message.success("群组创建成功");
        }
        formDataRef.value.resetFields();
        contactStateSotre.setContactReload("MY");

        // TODO 重新加载头像
    });
}
</script>

<style lang="scss" scoped>
</style>
