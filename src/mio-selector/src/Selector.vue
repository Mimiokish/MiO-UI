<script>
import Utils from "../../utils";
import Options from "./Options.vue";
import { computed } from "vue";

export default {
    name: "mio-selector",
    components: {
        Options
    },
    props: {
        modelValue: {
            type: [String, Number, null],
            default: null
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    provide() {
        return {
            value: computed(() => this.value),
            updateMethods: {
                value: this.updateValue
            }
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID(),
            value: null,
            eventDocumentClick: this.handleDocumentClick
        };
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(value) {
                this.value = value;
            }
        }
    },
    methods: {
        updateValue(value) {
            this.$emit("update:modelValue", value);
        },
        handleClick(event) {
            const _nodeSelector = document.getElementById("MiO-Selector-" + this.UUID);
            const _nodeOptions = document.getElementById("MiO-Options-" + this.UUID);

            _nodeSelector.classList.toggle("active");
            _nodeOptions.classList.toggle("active");

            this.handlePopupDirection(_nodeOptions);
        },
        handlePopupDirection(node) {
            const _node = node;

            if (_node) {
                const _viewportSize = Utils.GetViewportSize();
                const _nodePosition = Utils.GetNodePosition(_node);
                const viewableHeight = _viewportSize.height * 0.20;

                if (_nodePosition.top > viewableHeight) {
                    _node.classList.remove("bottom");
                    _node.classList.add("top");
                } else {
                    _node.classList.remove("top");
                    _node.classList.add("bottom");
                }
            }
        },
        handleDocumentClick(event) {
            const _target = event.target;

            if (!_target.id.includes(this.UUID)) {
                const _nodeSelector = document.getElementById("MiO-Selector-" + this.UUID);
                const _nodeOptions = document.getElementById("MiO-Options-" + this.UUID);

                _nodeSelector.classList.remove("active");
                _nodeOptions.classList.remove("active");
            }
        }
    },
    mounted() {
        document.addEventListener("click", this.eventDocumentClick);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.eventDocumentClick);
    }
};
</script>

<template>
    <div :id="'MiO-Selector-' + UUID" class="mio-selector" @click="handleClick">
        <div v-if="options.length <= 0" class="mio-selector-no-data">暂无数据</div>
        <template v-else>
            <template v-for="option in options">
                <div v-if="option.value === value" class="mio-selector-selection">{{ option.label }}</div>
            </template>
            <div class="mio-selector-icon">&#10597;</div>
            <Options :id="'MiO-Options-' + UUID" :options="options" />
        </template>
    </div>
</template>

<style scoped lang="scss">
.mio-selector {
    position: relative;
    width: 200PX;
    height: 32PX;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14PX;
    font-weight: 400;
    line-height: 32PX;
    background-color: rgba(255, 255, 255, 1);
    border: 1PX solid rgba(45, 45, 45, 0.2);
    border-radius: 4PX;
    box-shadow: 0 0 2PX rgba(45, 45, 45, 0.2);

    &:hover {
        cursor: pointer;

        .mio-selector-icon {
            color: rgba(0, 156, 156, 1);
        }
    }

    &.active {
        .mio-selector-icon {
            transform: rotateX(180deg);
        }
    }

    .mio-selector-selection {
        pointer-events: none;
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        padding: 2PX 6PX;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .mio-selector-icon {
        pointer-events: none;
        flex: 0 0 32PX;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14PX;
        font-weight: 400;
        line-height: 32PX;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }
}
</style>
