<template>
    <div
        class="app__icon"
        :style="style">{{ text }}</div>
</template>

<script>
export default {
    name: 'appIcon',
    props: {
        icon: String,
        theme: String
    },
    computed: {
        style() {
            // 主题样式
            const theme = this.theme || 'light'
            const themeColor = theme === 'light' ? '#ffffff' : '#444444'
            const themeStyle = `background-color: ${themeColor};`
            // 图标样式
            let iconStyle = `background-image: url("${this.icon}");`
            if (this.icon && !this.icon.match(/\.(jpg|png|gif|svg)/)) {
                const text = this.icon
                const fontSize = 56 / text.length
                iconStyle = `font-size: ${fontSize}px;`
            }
            return `${iconStyle}${themeStyle}`
        },
        text() {
            if (this.icon && !this.icon.match(/\.(jpg|png|gif|svg)/)) {
                return this.icon
            }
            return '';
        }
    }
}
</script>