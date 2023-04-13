import 'vue-toastification/dist/index.css';
import { useToast } from 'vue-toastification';
// import '@/assets/sass/_custom.scss';
export default defineNuxtPlugin((nuxtApp) => {
    const toast = useToast({
        position: 'top-right',
        timeout: 1000,
        closeButton: false,
        bodyClassName: "toast-body-class",
        toastClassName: "toast-class",
        icon: true,
        hideProgressBar:true,
        pauseOnHover:false
      })
    return {
        provide:{
            toast
        }
    }
})