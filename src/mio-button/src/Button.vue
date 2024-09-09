<script>
export default {
    name: "mio-button"
}
</script>

<script setup>
import { watch, onMounted } from "vue";
import Utils from "../../utils";

const props = defineProps({
    radius: {
        type: String,
        default: "none"
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const UUID = Utils.General.GenerateUUID();

watch(() => props.radius, (newValue) => {
    setBorderRadius(newValue);
});
watch(() => props.disabled, (newValue) => {
    setDisabled(newValue);
});

function setBorderRadius(radius) {
    const _radius = radius
    const _nodeButton = document.getElementById('MiO-Button-' + UUID);

    if (_nodeButton) {
        switch (_radius) {
            case "small":
                _nodeButton.style.borderRadius = "6PX";
                break
            case "medium":
                _nodeButton.style.borderRadius = "12PX";
                break
            case "large":
                _nodeButton.style.borderRadius = "18PX";
                break
            default:
                _nodeButton.style.borderRadius = "0";
        }
    }
}

function setDisabled(disable) {
    const _disable = disable;
    const _nodeButton = document.getElementById('MiO-Button-' + UUID);

    if (_nodeButton) {
        if (_disable) {
            _nodeButton.classList.add("disabled");
        } else {
            _nodeButton.classList.remove("disabled");
        }
    }
}

onMounted(() => {
    setBorderRadius(props.radius);
    setDisabled(props.disabled);
});
</script>

<template>
    <div :id="'MiO-Button-' + UUID" class="mio-button">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.mio-button {
    height: 36PX;
    box-sizing: border-box;
    padding: 6PX 20PX;
    color: rgba(46, 46, 46, 0.8);
    font-weight: 500;
    font-size: 16PX;
    line-height: 36PX;
    border: 1PX solid rgba(226, 226, 226, 1);
    box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }

    &.disabled {
        pointer-events: none;
        opacity: 0.6;

        &:hover {
            cursor: not-allowed;
        }
    }
}
</style>
