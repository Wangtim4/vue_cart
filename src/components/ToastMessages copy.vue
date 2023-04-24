<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
        <Toast />
    </div>
</template>
<script>
import Toast from '@/components/Toast.vue';
export default {
    components: {
        Toast,
    },
    data () {
        return {
            message: [],
        };
    },
    inject: ['emitter'],
    mounted () {
        this.emmiter.on('push-message', (message) => {
            const { style = 'success', title, content } = message;
            this.message.push({ style, title, content });
        })
    }
}
</script>