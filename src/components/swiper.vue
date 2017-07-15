<template>
    <swiper
        class="vw-swiper"
        :options="swiperOption"
        ref="VWSwiper">
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
    name: 'VWSwiper',
    props: {
        appData: Array,
        gutter: String
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
                observeParents: true
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.VWSwiper.swiper
        }
    }
}
</script>

<style lang="scss">
.vw-swiper {
    width: 100%;
    height: 100%;
    &__pagination.swiper-pagination-bullets {
        position: absolute;
        bottom: 2px;
        z-index: 1;
        width: 100vw;
        text-align: center;
    }
    .swiper-pagination-bullet {
        background: rgba(255, 255, 255, 0.3);
        opacity: 1;
        &-active {
            background: white;
        }
    }
}
</style>