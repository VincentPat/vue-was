<template>
    <div class="app">
        <app-icon
            :icon="appData.icon"
            :theme="appData.theme"
            @click.native="openApp"
            ref="icon"></app-icon>
        <div class="app__name">{{ appData.name }}</div>
    </div>
</template>

<script>
import appIcon from './app-icon.vue'

export default {
    name: 'app',
    components: {
        'app-icon': appIcon
    },
    props: {
        appData: Object
    },
    methods: {
        openApp() {
            const data = Object.assign({}, this.appData, {
                el: this.$refs.icon.$el
            })
            this.$event.$emit('openApp', data)
        }
    }
}
</script>