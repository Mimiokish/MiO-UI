<script>
export default {
    name: "mio-divider"
}
</script>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: false,
        default: ""
    }
})
</script>

<template>
    <div class="mio-divider">{{ props.label }}</div>
</template>

<style lang="scss" scoped>
.mio-divider {
    margin: 40PX 0 20PX 0;
    font-size: 18PX;
    font-weight: 600;
}
</style>
