<template>
    <div class="row m-3 text-center">
        <h1>Gallery</h1>
        <hr class="mt-2 mb-5">
    </div>
    <div class="row m-3 text-center text-lg-start">
        <div class="col-lg-3 col-md-6 col-sm-6 pic" v-for="(img, index) in imgs" :key="index" @click="() => showImg(index)">
            <a class="d-block mb-4 h-100">
                <img class="img-rounded customize-img" :src="img.src" />
            </a>
        </div>
        <vue-easy-lightbox :visible="visibleRef" :loop="true" :imgs="imgs" :index="indexRef" :moveDisabled="true"
            @hide="onHide"></vue-easy-lightbox>
    </div>
</template>
<script>
import { ref } from "vue";
export default {
    setup()
    {
        const visibleRef = ref(false)
        const indexRef = ref(0)
        const imgs = [
            { src: 'src/assets/img/fruit-01.jpg' },
            { src: 'src/assets/img/fruit-02.jpg' },
            { src: 'src/assets/img/fruit-03.jpg' },
            { src: 'src/assets/img/fruit-04.jpg' },
            { src: 'src/assets/img/fruit-05.jpg' },
            { src: 'src/assets/img/fruit-06.jpg' },
            { src: 'src/assets/img/fruit-07.jpg' },
            { src: 'src/assets/img/fruit-08.jpg' },
            { src: 'src/assets/img/fruit-09.jpg' },
            { src: 'src/assets/img/fruit-10.jpg' },
            { src: 'src/assets/img/fruit-11.jpg' },
            { src: 'src/assets/img/fruit-12.jpg' }
        ]
        const showImg = (index) =>
        {
            indexRef.value = index
            visibleRef.value = true
        }
        const onHide = () => visibleRef.value = false
        return {
            visibleRef,
            indexRef,
            imgs,
            showImg,
            onHide
        }
    },
    data()
    {
        return {}
    },
    mounted() { },
    methods: {}
}
</script>
<style></style>