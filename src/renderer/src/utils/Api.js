const api = {
    prodDomain:  "http://127.0.0.1:5050",
    devDomain:  "http://127.0.0.1:5050",
    prodWsDomain:  "ws://127.0.0.1:5051/ws",
    devWsDomain:  "ws://127.0.0.1:5051/ws",
    checkCode:  "/account/checkCode",
    login:  "/account/login",
    register:  "/account/register",
    getSyssetting:"/account/getSysSetting",
    loadMyGroup:"/group/loadMyGroup", //获取我创建的群组
    saveGroup:"/group/saveGroup",//保存群组
    getGroupInfo:"/group/getGroupInfo",//获取群组信息
    getGroupInfo4Chat:"/group/getGroupInfo4Chat",//获取群聊群详细信息
    dissolutionGroup:"/group/dissolutionGroup",//解散群组
    leaveGroup:"/group/leaveGroup",//退出群组
    addorRemoveGroupUser:"/group/addorRemoveGroupUser",//添加或者删除群成员
    search:"/contact/search",//搜索好友
    applyAdd:"/contact/applyAdd",//申请加入
    loadApply:"/contact/loadApply",//获取申请列表
    dealwithApply:"/contact/dealwithApply",//处理申请
    loadContact:"/contact/loadContact",//获取联系人列表
    getContactUserInfo:"/contact/getContactUserInfo",//获取联系人信息
    addContact2BlackList:"/contact/addcontact2BlackList",//拉黑联系人
    delContact:"/contact/delContact",//删除联系人
    getContactInfo:"/contact/getContactInfo",//获取联系人信息
    saveUserInfo:"/userInfo/saveUserInfo",//保存用户信息
    getUserInfo:"/userInfo/getUserInfo",//获取用户信息
    updatePassword:"/userInfo/updatePassword",
    logout:"/userInfo/logout",
    sendMessage:"/chat/sendMessage",//发送消息,
    uploadFile:"/chat/uploadFile", //上传文件地址
    loadAdminAccount:"/admin/loadUser",//后台获取用户列表
    updateUserstatus:"/admin/updateUserstatus",//后台更新用户状态
    forceoffLine:"/admin/forceoffLine",//强制下线
    loadGroup:"/admin/loadGroup",//群组列表
    adminDissolutionGroup:"/admin/dissolutionGroup",//解散群组
    saveSyssetting:"/admin/saveSysSetting",//保存系统设置
    getSyssetting4Admin:"/admin/getsyssetting",//获取系统设置
    loadUpdateDataList:'/admin/loadUpdateList',//获取更新列表
    delUpdate:'/admin/delUpdate',//删除更新
    saveUpdate:"/admin/saveUpdate",//保存更新
    postUpdate:"/admin/postUpdate",//发布更新
    loadBeautyAccount:"/admin/loadBeautyAccountList",//靓号列表
    saveBeautAccount:"/admin/saveBeautAccount",//保存靓号
    delBeautAccpunt:"/admin/delBeautAccount",//删除靓号
    checkVersion:"/update/checkVersion",//更新检测

}

export default api;