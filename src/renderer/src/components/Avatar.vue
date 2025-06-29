<template>
  <div>
    <AvatarBase 
        :userId="userId" 
        :borderRadius="borderRadius"
        :showDetail="false"
        v-if="userId=='Urobot'"
        :width="width">
    </AvatarBase>
    <el-popover
        v-else
        :width="280"
        :show-arrow="false"
        transition="none"
        :hide-after="0"
        placement="right-start"
        @show="getContactInfo"
        trigger="click"
        ref="popoverRef">
        <template #reference>
            <AvatarBase 
                :userId="userId" 
                :borderRadius="borderRadius"
                :showDetail="false"
                :width="width">
            </AvatarBase>
        </template>
        <template #default>
            <UserBaseInfo :userInfo="userInfo"></UserBaseInfo>
            <div class="op-btn" v-if="userId !== userInfoStore.getInfo().userId">
                <el-button v-if="userInfo.contactStatus == 1" type="primary"  @click="sendMessage">发送消息</el-button>
                <el-button v-else @click="addContact">加为好友</el-button>
            </div>
        </template>
    </el-popover>
    
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
import UserBaseInfo from "./UserBaseInfo.vue";
import AvatarBase from "@/components/AvatarBase.vue"
const { proxy } = getCurrentInstance();
import {useUserInfoStore} from '@/stores/UserInfoStore'

const userInfoStore = useUserInfoStore()

const props = defineProps({
    userId: {
        type: String
    },
    width: {
        type: Number,
        default: 40
    },
    borderRadius: {
        type: Number,
        default: 0
    },
    groupId: {
        type: String
    },
})
const userInfo = ref({})
const getContactInfo = async ()=>{
    userInfo.value.userId = props.userId;
    console.log("获取联系人信息");
    if(userInfoStore.getInfo().userId==props.userId){   
        userInfo.value = userInfoStore.getInfo();
    }else {
        
        let result = await proxy.Request({
          url: proxy.Api.getContactInfo,
          params:{
            contactId: props.userId
          },
          showLoading: false
        })
        if(!result){
          return;
        }
        userInfo.value = Object.assign({}, result.data)
        
        console.log(result.data);
    }
}
//TODO 发送消息
const sendMessage = ()=>{

}
//TODO 添加好友
const addContact = ()=>{

}
</script>

<style lang="scss" scoped>
.op-btn {
    text-align: center;
    border-top: 1px solid #eaeaea;
    padding-top: 10px;
}
</style>
