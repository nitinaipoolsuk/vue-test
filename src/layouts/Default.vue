<template>
    <Heaer></Heaer>
    <div class="body py-5">
        <div class="container">
            <router-view />
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import Heaer from "./Herder.vue"
import Footer from "./Footer.vue"
export default {
    name: "LayoutDefault",
    components: {
        Heaer,
        Footer
    }
}
</script>
<style></style>