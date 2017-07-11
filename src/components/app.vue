<template>
    <div class="app">
        <div
            class="app__icon"
            :style="icon"></div>
        <div class="app__name">{{ appData.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'app',
    props: {
        appData: Object
    },
    computed: {
        icon() {
            return `background-image: url("${this.appData.icon}")`
        }
    }
}
</script>