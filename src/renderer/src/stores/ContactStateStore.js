import { defineStore } from "pinia";

export const useContacteStateStore = defineStore('contacteStateInfo',{
    state: () => {
        return{
            contactReload: null,
            delContactId: null,
        }
    },
    actions: {
        setContactReload(state) {
            this.contactReload = state;
        },
        delContactId(delContactId) {
            this.delContactId = delContactId;
        }
    }
});
