<template>
  
  <div class="login-panel">
    <div class="title drag">EasyChat</div>
    <div class="login-form">
      <div class="error-msg">{{ errorMsg }}</div>
      <el-form
        :model="formData"
        ref="formDataRef"
        
        @submit.prevent
      >
      <!--input输入-->
        <el-form-item prop="email" >
          <el-input size="large" clearable placeholder="请输入邮箱" 
              maxLength="30" v-model.trim="formData.email"
              @focus="cleanVerify">
            <template #prefix>
              <span class="iconfont icon-email"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="nickName" v-if="!isLogin" >
          <el-input 
            size="large" clearable placeholder="请输入昵称" 
            maxLength="15"
            v-model.trim="formData.nickName"
            @focus="cleanVerify">
            <template #prefix>
              <span class="iconfont icon-user-nick"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" >
          <el-input 
          size="large" 
          show-password 
          clearable 
          placeholder="请输入密码" 
          v-model.trim="formData.password"
          @focus="cleanVerify">
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="rePassword" v-if="!isLogin">
          <el-input 
            size="large" 
            show-password 
            clearable 
            placeholder="请再次输入密码" 
            v-model.trim="formData.rePassword"
            @focus="cleanVerify">
            <template #prefix>
              <span class="iconfont icon-password"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkcode" >
          <el-input size="large" clearable placeholder="请输入验证码" v-model.trim="formData.checkcode"
          @focus="cleanVerify">
            <template #prefix>
              <span class="iconfont icon-checkcode"></span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkcode" >
          <el-button type="primary" class="login-btn" size="default" @click="submit"> {{ isLogin?'登录':'注册' }}</el-button>
        </el-form-item>
        <div class="bottom-link">
          <span class="a-link" @click="changeOnType">
            {{ isLogin?'没有账号？':'已有账号？' }}
          </span>
        </div>
      </el-form>
    </div>
    
  </div>
  
</template>

<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();
const formData = ref({});
const formDataRef = ref();


const isLogin = ref(true);

const changeOnType = () => {
  window.ipcRenderer.send('loginOrRegister',!isLogin.value)
  isLogin.value = !isLogin.value
  nextTick(() => {
    formDataRef.value.resetFields();
    formData.value = {}
    cleanVerify()
  })
}
const errorMsg = ref(null)
const submit = () => {
  cleanVerify()
  if (!checkValue('checkEmail',formData.value.email,'请输入正确邮箱')) {
    return
  }
  if (!isLogin.value&&!checkValue(null,formData.value.nickName,'请输入昵称')) {
    return
  }
  if (!checkValue('checkPassword',formData.value.password,'密码只能是数字、字母、特殊字符8-18位')) {
    return
  }
  if (!isLogin.value&& formData.value.password != formData.value.rePassword) {
    errorMsg.value = '两次输入密码不一致';
    return
  }
  if (!checkValue(null,formData.value.checkcode,'验证码错误')) {
    return
  }
  

  
  
}

const checkValue = (type,value,msg) => {
  if(proxy.Utils.isEmpty(value)){
    errorMsg.value = msg;
    return false
  }
  if(type&&!proxy.Verify[type](value)) {
    errorMsg.value = msg
    return false
  }
  return true
}
// 清空校验
const cleanVerify = () => {
  errorMsg.value = null;
}

</script>

<style lang="scss" scoped>
.email-select {
  width: 250px;
}
.loading-panel {
  height: calc(100vh - 32px);
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    width: 300px;
  }
}

.login-panel {
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  
  .title {
    float: right;
    height: 30px;
    padding: 5px 15px 0px 10px;
  }
  .login-form {
    margin-top: 37px;
    padding: 0px 15px 29px 15px;
    :deep(.el-input__wrapper) {
      box-shadow:  none;
      border-radius: none;
    }
    .el-form-item {
      border-bottom: 1px solid #ddd;
    }

    .email-panel {
      align-items: center;
      width: 100%;
      display: flex;
      .input {
        flex: 1;
      }
      .icon-down {
        margin-left: 3px;
        width: 16px;
      }
    }
    .error-msg {
      line-height: 30px;
      height: 30px;
      color: #fb7373;
    }
    .check-code-panel {
      display: flex;
      .check-code {
        cursor: pointer;
        width: 120px;
        margin-left: 5px;
      }
    }
    .login-btn {
      margin-top: 20px;
      width: 100%;
      background: #07c160;
      height: 36px;
      font-size: 16px;
    }
    .bottom-link {
      text-align: right;
    }
  }
}
</style>
