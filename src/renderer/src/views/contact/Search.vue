<template>
  <ContentPanel>
    <div class="search-form">
     <el-input clearable placeholder="请输入用户ID或群组ID" v-model="contactId" size="large" @keydown.enter="search"> </el-input>
     <div class="search-btn iconfont icon-search" @click="search"></div>
    </div>
    <div v-if="searchResult&&Object.keys(searchResult).length > 0" class="search-result-panel">
      <div class="search-result">
        <span class="content-type">{{ contactTypeName }}</span>
        <UserBaseInfo 
          :userInfo="searchResult" 
          :showArea="searchResult.contactType=='USER'">
        </UserBaseInfo>
      </div>
      <div class="op-btn" v-if="searchResult.contactId != userInfo.getInfo().userId">
        <el-button type="primary" 
          v-if= "
          searchResult.status == null ||
          searchResult.status == 0 ||
          searchResult.status == 2 ||
          searchResult.status == 3 ||
          searchResult.status == 4
          "
          @click="applyContact">
          {{ searchResult.contactType == 'USER' ? '添加到联系人':'申请加入群组' }}
        </el-button>
        <el-button type="primary" v-if="searchResult.status == 1"  @click="sendMessage">发消息</el-button>
        <span v-if="searchResult.status == 5|| searchResult.status == 6">对方拉黑了你</span>
        
      </div>
    </div>
    <div v-else="!searchResult" class="no-data">没有搜索到任何结果</div>
  </ContentPanel>
  <SeachAdd ref="searchAddRef" @reload="resetFrom"></SeachAdd>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick, computed } from "vue"
const { proxy } = getCurrentInstance();
import { useUserInfoStore } from "@/stores/UserInfoStore";
import SeachAdd from "./SeachAdd.vue";


const userInfo = useUserInfoStore();
console.log(userInfo.getInfo().userId != null);

const contactTypeName = computed(() => {
  if(userInfo.getInfo().userId===searchResult.value.contactId) {
    return '自己';
  }
  if(searchResult.value.contactType=='USER') {
    return '用户';
  }
  if(searchResult.value.contactType=='GROUP') {
    return '群组';
  }
})
const contactId = ref();
const searchResult = ref({});
const search = async () => {
  if(!contactId.value) {
    proxy.Message.warning("请输入用户ID或群组ID")
    return;
  }
 
  let result = await proxy.Request({
     url: proxy.Api.search,
     params:{
      contactId: contactId.value
     }
  })
  if(!result){
    return;
  }
  searchResult.value = result.data
}
const searchAddRef = ref();
const applyContact = ()=>{
  searchAddRef.value.show(searchResult.value)
}

const resetFrom = ()=>{
  searchResult.value = {};
  contactId.value = undefined;
}
</script>

<style lang="scss" scoped>
  .search-form {
    padding-top: 50px;
    display: flex;
    align-items: center;
    :deep(.el-input_wrapper) {
      border-radius: 4px 0px 0px 4px;
      border-right: none;
    }
    .search-btn {
      background: #07c160;
      color: #fff;
      line-height: 40px;
      width: 80px;
      text-align: center;
      border-radius: 0px 5px 5px 0px;
      cursor: pointer;
      &:hover {
        background: #0dd36c;
      }      
    }
  }
  .no-data {
    padding: 30px 0px;
  }
  .search-result-panel {
    .search-result {
      padding: 30px 20px 20px 20px;
      background: #fff;
      border-radius: 5px;
      margin-top: 10px;
      position: relative;
      .content-type {
        position: absolute;
        left: 0px;
        top: 0px;
        background: #2cb6fe;
        padding: 2px 5px;
        color: #fff;
        border-radius: 5px 0px 0px 0px;
        font-size: 12px;
      }
    }
    .op-btn {
      border-radius: 5px;
      margin-top: 10px;
      padding: 10px;
      background: #fff;
      text-align: center;
    }
  }
</style>
