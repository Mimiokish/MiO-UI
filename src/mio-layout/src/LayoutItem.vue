<script>
export default {
    name: "mio-layout-item",
    props: {
        width: {
            type: String,
            default: "1"
        }
    },
    data() {
        return {
            style: {}
        }
    },
    methods: {
        initialStyle() {
            const _width = this.width;

            if (_width === "1") {
                Object.assign(this.style, {
                    flex: "1"
                });
            } else {
                Object.assign(this.style, {
                    flex: `0 0 ${_width}`
                });
            }
        }
    },
    created() {
        this.initialStyle();
    }
}
</script>

<template>
    <div :style="style" class="mio-layout-item">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-layout-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>
