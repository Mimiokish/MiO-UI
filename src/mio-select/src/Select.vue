<script>
export default {
    name: "mio-select"
};
</script>

<script setup>
import { ref, provide, watch, onMounted } from "vue";
import Utils from "../../utils/index.js";

const props = defineProps({
    modelValue: {
        type: [String, Number, null],
        default: null
    },
    placeholder: {
        type: String,
        default: "select an option"
    }
});
const emit = defineEmits(["update:modelValue"]);

const UUID = Utils.GenerateUUID();
const selectLabel = ref(null);
const selectValue = ref(null);
const selectType = ref("");
const eventDocumentClick = handleDocumentClick;

provide("updateMethods", {
    value: updateValue
});

watch(() => props.modelValue, (value) => {
    const _value = value;
    selectType.value = Object.prototype.toString.call(_value);

    const _nodeOptions = document.getElementById("MiO-Select-Options-" + UUID);
    if (_nodeOptions && _nodeOptions.children) {
        const len = _nodeOptions.children.length;

        for (let idx = 0; idx < len; idx++) {
            const nodeOption = _nodeOptions.children[idx];
            const _tempValue = nodeOption.getAttribute("value");

            let tempValue;
            switch (selectType.value) {
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
                selectType.value = nodeOption.getAttribute("key");
                selectValue.value = _value;
                selectLabel.value = nodeOption.innerText;
                break;
            }
        }
    }
}, { immediate: true });
watch(() => selectValue.value, (value) => {
    emit("update:modelValue", value);
})

function updateValue(key, value, label) {
    selectLabel.value = label;
    selectValue.value = value;
}
function handleClick(event) {
    const _nodeSelect = document.getElementById("MiO-Select-" + UUID);
    const _nodeOptions = document.getElementById("MiO-Select-Options-" + UUID);

    _nodeSelect.classList.toggle("active");
    _nodeOptions.classList.toggle("active");

    handlePopupDirection();
}
function handlePopupDirection(node) {
    const _nodeSelect = document.getElementById("MiO-Select-" + UUID);
    const _nodeSelectOptions = document.getElementById("MiO-Select-Options-" + UUID);

    const _selectPosition = Utils.GetNodePosition(_nodeSelect);
    const _selectOptionsHeight = _nodeSelectOptions.offsetHeight;

    if ((_selectPosition.bottom * 0.96) < _selectOptionsHeight) {
        _nodeSelectOptions.classList.remove("bottom");
        _nodeSelectOptions.classList.add("top");
    } else {
        _nodeSelectOptions.classList.remove("top");
        _nodeSelectOptions.classList.add("bottom");
    }
}
function handleDocumentClick(event) {
    const _target = event.target;

    if (!_target.id.includes(UUID)) {
        const _nodeSelect = document.getElementById("MiO-Select-" + UUID);
        const _nodeOptions = document.getElementById("MiO-Select-Options-" + UUID);

        _nodeSelect.classList.remove("active");
        _nodeOptions.classList.remove("active");
    }
}

onMounted(() => {
    document.addEventListener("click", eventDocumentClick);

    handlePopupDirection();
});
</script>

<template>
    <div :id="'MiO-Select-' + UUID" class="mio-select" @click="handleClick">
        <div class="mio-select-placeholder" v-show="!selectValue">{{ props.placeholder }}</div>
        <div class="mio-select-label" v-show="selectValue">{{ selectLabel }}</div>
        <div class="mio-select-icon">&#10094;</div>
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
            opacity: 0.3;
        }
    }

    &.active {
        .mio-select-icon {
            transform: rotateZ(-90deg);
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
        color: rgba(46, 46, 46, 0.8);
        font-size: 14PX;
        font-weight: 400;
        line-height: 32PX;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    .mio-select-options {
        transform: translateX(-50%) scaleY(0);
        pointer-events: none;
        position: absolute;
        left: 50%;
        display: flex;
        flex-direction: column;
        border-radius: 4PX;
        overflow-y: auto;
        overflow-x: hidden;
        opacity: 0.5;
        height: auto;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 6PX rgba(45, 45, 45, 0.25);
        -ms-overflow-style: none;
        scrollbar-width: none;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        &::-webkit-scrollbar {
            display: none;
        }

        &.active {
            transform: translateX(-50%) scaleY(1);
            pointer-events: auto;
            opacity: 1;
            height: auto;
        }

        &.top {
            transform-origin: bottom center;
            bottom: 120%;
        }

        &.bottom {
            transform-origin: top center;
            top: 120%;
        }
    }
}
</style>
