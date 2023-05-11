<template>
    <Container>
        <div class="home_homeBanner">
            <div class="swiper-container js_banner">
                <div class="swiper-wrapper">
                    <div
                        v-for="(banner, i) in banners"
                        :key="i"
                        class="swiper-slide"
                    >
                        <img class="p_img" :src="banner.bannerPath" />
                    </div>
                </div>
            </div>

            <div class="swiper-pagination banner_page"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </Container>
</template>

<script lang="ts" setup name="HomeBanner">
import Banner1 from "~/assets/imgs/11.webp";
import Banner2 from "~/assets/imgs/22.webp";
import Banner3 from "~/assets/imgs/33.webp";

const banners = reactive([
    {
        bannerPath: Banner1,
    },
    {
        bannerPath: Banner2,
    },
    {
        bannerPath: Banner3,
    },
    {
        bannerPath: Banner1,
    },
    {
        bannerPath: Banner1,
    },
]);
</script>

<style lang="scss" scoped>
.home_homeBanner {
    text-align: center;
    position: relative;
    width: 1200px;
    height: 388px;
    margin: 0 auto 40px auto;
}
.home_swiper {
    width: 1200px;
    height: 388px;
}
:deep(.swiper-slide) {
    width: 1000px;
    height: 360px;
    display: flex;
    align-items: center;
}
.p_img {
    border-radius: 20px;
    width: 100%;
    height: 360px;
}
:deep(.swiper-pagination) {
    position: fixed;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    bottom: 0;
    z-index: 100;
    height: 12px;
    opacity: 1;
}
:deep(.swiper-pagination-bullet) {
    background: rgba(51, 51, 51, 0.2);
    border-radius: 4rem;
    margin: 0 5px;
    opacity: 1;
}
:deep(.swiper-pagination .swiper-pagination-bullet-active) {
    width: 20px;
    background: #3b8cfe;
}
:deep(
        .swiper-container-horizontal
            > .swiper-pagination-bullets
            .swiper-pagination-bullet
    ) {
    margin: 0 5px;
}
:deep(.swiper-slide-prev) {
    transform: translateX(801.6px) scale(0.8) !important;
}
:deep(.swiper-slide-next) {
    transform: translateX(-801.6px) scale(0.8) !important;
}
:deep(.swiper-slide-prev::after) {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    border-radius: 20px;
}
:deep(.swiper-slide-next::after) {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    border-radius: 20px;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 40px;
}
:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
    font-size: 16px;
    color: #ffffff;
    font-weight: bold;
}
:deep(.swiper-button-next),
:deep(.swiper-container-rtl .swiper-button-prev) {
    right: 50px;
    opacity: 0;
}
:deep(.swiper-button-prev),
:deep(.swiper-container-rtl .swiper-button-prev) {
    left: 50px;
    opacity: 0;
}
.home_homeBanner:hover .swiper-button-next,
.home_homeBanner:hover .swiper-container-rtl .swiper-button-prev {
    right: 50px;
    opacity: 1;
}
.home_homeBanner:hover .swiper-button-prev,
.home_homeBanner:hover .swiper-container-rtl .swiper-button-prev {
    left: 50px;
    opacity: 1;
}
</style>
