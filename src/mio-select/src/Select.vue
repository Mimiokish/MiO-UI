<script>
import Utils from "../../utils";
import SelectOption from "./SelectOption.vue";

export default {
    name: "mio-select",
    components: {
        SelectOption
    },
    props: {
        modelValue: {
            type: [String, Number, null],
            default: null
        },
        placeholder: {
            type: String,
            default: "select an option"
        }
    },
    provide() {
        return {
            updateMethods: {
                value: this.updateValue
            }
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID(),
            label: null,
            value: null,
            type: "",
            eventDocumentClick: this.handleDocumentClick
        };
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(value) {
                const _value = value;
                this.type = Object.prototype.toString.call(_value);

                const _nodeOptions = document.getElementById("MiO-Select-Options-" + this.UUID);
                if (_nodeOptions && _nodeOptions.children) {
                    const len = _nodeOptions.children.length;

                    for (let idx = 0; idx < len; idx++) {
                        const nodeOption = _nodeOptions.children[idx];
                        const _tempValue = nodeOption.getAttribute("value");

                        let tempValue;
                        switch (this.type) {
                            case "[object Number]":
                                tempValue = Number(_tempValue);
                                break;
                            case "[object String]":
                                tempValue = String(_tempValue);
                                break;
                            default:
                                tempValue = _tempValue;
                                break;
                        }
                        if (tempValue === _value) {
                            this.key = nodeOption.getAttribute("key");
                            this.value = _value;
                            this.label = nodeOption.innerText;
                            break;
                        }
                    }
                }
            }
        },
        value: {
            handler(value) {
                this.$emit("update:modelValue", value);
            }
        }
    },
    methods: {
        updateValue(key, value, label) {
            this.label = label;
            this.value = value;
        },
        handleClick(event) {
            const _nodeSelect = document.getElementById("MiO-Select-" + this.UUID);
            const _nodeOptions = document.getElementById("MiO-Select-Options-" + this.UUID);

            _nodeSelect.classList.toggle("active");
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
                const _nodeSelect = document.getElementById("MiO-Select-" + this.UUID);
                const _nodeOptions = document.getElementById("MiO-Select-Options-" + this.UUID);

                _nodeSelect.classList.remove("active");
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
    <div :id="'MiO-Select-' + UUID" class="mio-select" @click="handleClick">
        <div class="mio-select-placeholder" v-show="!value">{{ placeholder }}</div>
        <div class="mio-select-label" v-show="value">{{ label }}</div>
        <div class="mio-select-icon">&#10597;</div>
        <div :id="'MiO-Select-Options-' + UUID" class="mio-select-options">
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.mio-select {
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

        .mio-select-icon {
            color: rgba(0, 156, 156, 1);
        }
    }

    &.active {
        .mio-select-icon {
            transform: rotateX(180deg);
        }
    }

    .mio-select-placeholder, .mio-select-label {
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

    .mio-select-placeholder {
        color: rgba(45, 45, 45, 0.5);
    }

    .mio-select-icon {
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

    .mio-select-options {
        position: absolute;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 6PX rgba(45, 45, 45, 0.25);
        left: 50%;
        transform: translateX(-50%) scaleY(0);
        width: 95%;
        display: flex;
        flex-direction: column;
        border-radius: 4PX;
        overflow-y: auto;
        overflow-x: hidden;
        opacity: 0;
        height: auto;
        max-height: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            opacity: 1;
            height: auto;
            max-height: 300PX;
            transform: translateX(-50%) scaleY(1);
            transition-duration: 0.25s;
            transition-timing-function: ease-in-out;

            &.top {
                transform-origin: bottom;
                top: auto;
                bottom: 120%;
            }

            &.bottom {
                transform-origin: top;
                top: 120%;
                bottom: auto;
            }
        }
    }
}
</style>
