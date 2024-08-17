<script>
import Utils from "../../utils";

export default {
    name: "mio-breadcrumbs",
    props: {
        separator: {
            type: String,
            default: "/"
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID()
        }
    },
    provide() {
        return {
            separator: this.separator
        }
    },
    methods: {
        disableFirstSeparator() {
            const children = this.$el.children;
            if (children.length > 0 && children[0]) {
                if (children[0].classList.contains("mio-breadcrumb-separator")) {
                    children[0].remove();
                }
            }
        }
    },
    mounted() {
        this.disableFirstSeparator();
    },
    updated() {
        this.disableFirstSeparator();
    }
}
</script>

<template>
    <div :id="'MiO-Breadcrumbs-' + UUID" class="mio-breadcrumbs">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-breadcrumbs {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
}
</style>
