import { ElMessage } from "element-plus";

const showMessage = (msg, callbcak, type) => {
    ElMessage({
        type: type,
        message: msg,
        duration: 2000,
        onClose: ()=> {
            if(callbcak) {
                callbcak();
            }
        }
    })
};

const message = {
    error: (msg, callbcak) => {
        showMessage(msg, callbcak, "error");
    },
    success: (msg, callbcak) => {
        showMessage(msg, callbcak, 'success');
    },
    warning: (msg, callbcak) => {
        showMessage(msg, callbcak, "warning");
    }
}

export default message;