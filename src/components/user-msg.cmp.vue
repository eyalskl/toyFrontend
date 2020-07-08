<template>
    <div v-if="msg" class="alert" :class="alertClass" >
        {{msg.txt}}
    </div>
</template>

<script>

import { eventBus, SHOW_MSG } from '@/services/event-bus.service.js'

export default {
    data() {
        return {
            msg: null
        }
    },
    computed: {
        alertClass() {
            if (!this.msg) return;
            return `alert-${this.msg.type}`
        }
    },
    created() {
        eventBus.$on(SHOW_MSG, msg => {
            this.msg = msg;
            var delay = msg.delay || 2500;
            setTimeout(() => {
                this.msg = null
            }, delay)
        })
    },
}

</script>