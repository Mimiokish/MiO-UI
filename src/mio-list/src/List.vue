<script>
import Utils from "../../utils";

export default {
    name: "mio-list",
    components: {
    },
    props: {
        options: {
            type: Array,
            default: () => []
        }
    },
    provide() {
        return {
            updateMethods: {
                active: this.updateActive
            }
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID(),
            active: "",
            mode: ""
        };
    },
    methods: {
        activate(marker) {
            const _mk = marker;

            if (_mk) {
                const _nodeContent = document.getElementById("MiO-List-Content-" + _mk);

                if (_nodeContent) {
                    _nodeContent.classList.add("active");
                }
            }
        },
        deactivate(marker) {
            const _mk = marker;

            if (_mk) {
                const _nodeContent = document.getElementById("MiO-List-Content-" + _mk);

                if (_nodeContent) {
                    _nodeContent.classList.remove("active");
                }
            }
        },
        activateDefault(marker) {},
        activateAccordion(marker) {},
        deactivateDefault(marker) {},
        deactivateAccordion() {},
        updateActive(active) {
            const _active = active;

            if (_active) {
                this.active = _active;
            }
        }
    }
}
</script>

<template>
    <div :id="'MiO-List-' + UUID" class="mio-list">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-list {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
</style>
