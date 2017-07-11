<template>
    <swiper
        class="vw-swiper"
        :options="swiperOption"
        :style="bg"
        ref="mySwiper">
        <!-- slides -->
        <swiper-slide
            v-for="(page, index) in appData"
            :key="index">
            <page
                :pageData="page"
                :gutter="gutter"></page>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="vw-swiper__pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import page from './page.vue'

export default {
    name: 'mySwiper',
    props: {
        appData: Array
    },
    components: {
        page
    },
    data() {
        return {
            swiperOption: {
                notNextTick: true,
                grabCursor: true,
                setWrapperSize :true,
                pagination: '.vw-swiper__pagination',
                paginationClickable: false,
                mousewheelControl: true,
                observeParents: true,
                onTransitionStart(swiper){
                    console.log(swiper)
                }
            },
            bgIndex: Math.ceil(Math.random() * 13)
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        },
        bg() {
            return `background-image: url("/dist/static/${this.bgIndex}.jpg");`
        },
        gutter() {
            const gutter = (window.innerWidth - 240) / 5
            return `${gutter}px`
        }
    },
    mounted() {
        console.log(this.gutter)
    }
}
</script>

<style lang="scss">
.vw-swiper {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &__pagination {
        position: absolute;
        bottom: 20px;
        z-index: 1;
        width: 100vw;
        text-align: center;
    }
    .swiper-pagination-bullet-active {
        background: white;
    }
}
</style>