<script>
export default {
    name: "mio-tooltip"
}
</script>

<script setup>
import { ref, useSlots, computed, cloneVNode, watch, onMounted, onUnmounted } from "vue";
import Utils from "../../utils/index.js";

const props = defineProps({
    content: {
        type: [ String, Number, Boolean, Date ],
        required: true,
        default: ""
    },
    placement: {
        type: String,
        required: false,
        default: "top"
    },
    offset: {
        type: Number,
        required: false,
        default: 6
    }
});

const _content = ref(props.content);
const _placement = ref(props.placement);
const _offset = ref(props.offset);

const UUID = Utils.General.GenerateUUID();
const slots = useSlots();

const slot = computed(() => {
    const slotDefault = slots.default && slots.default()[0];

    if (slotDefault) {
        return cloneVNode(slotDefault, {
            class: (slotDefault.props?.class || '') + ' mio-tooltip MiO-Tooltip-' + UUID,
            style: {
                ...slotDefault.props?.style,
                position: "relative"
            },
            onMouseenter: handleMouseEnter,
            onMouseleave: handleMouseLeave
        });
    }
})
const tooltipResize = () => {
    const _nodeTooltipContent = document.getElementById("MiO-Tooltip-Content-" + UUID);
    const _nodeTooltip = document.getElementsByClassName("MiO-Tooltip-" + UUID);

    if (_nodeTooltipContent && _nodeTooltip) {
        Utils.Popover.SetPosition(_nodeTooltipContent, _nodeTooltip[0], _placement.value, _offset.value);

        Utils.Popover.SetDeactivateStyle(_nodeTooltipContent);
    }
}

function handleMouseEnter(event) {
    const _nodeTooltipContent = document.getElementById("MiO-Tooltip-Content-" + UUID);
    const _nodeTooltip = document.getElementsByClassName("MiO-Tooltip-" + UUID);

    if (_nodeTooltipContent && _nodeTooltip) {
        Utils.Popover.ShowNode(_nodeTooltipContent, _nodeTooltip[0], _placement.value, _offset.value);
    }
}

function handleMouseLeave(event) {
    const _nodeTooltipContent = document.getElementById("MiO-Tooltip-Content-" + UUID);

    if (_nodeTooltipContent) {
        Utils.Popover.HideNode(_nodeTooltipContent);
    }
}

function popoverAppend() {
    const _nodeTooltipContent = document.getElementById("MiO-Tooltip-Content-" + UUID);
    const _nodeTooltip = document.getElementsByClassName("MiO-Tooltip-" + UUID);

    if (_nodeTooltipContent && _nodeTooltip) {
        Utils.Popover.Append(_nodeTooltipContent, _nodeTooltip[0], _placement.value, _offset.value);
    }
}

watch(() => props.content, (newValue) => {
    _content.value = newValue;
});
watch(() => props.placement, (newValue) => {
    _placement.value = newValue;
});
watch(() => props.offset, (newValue) => {
    _offset.value = newValue;
});

onMounted(() => {
    Utils.Initialize();
    popoverAppend();

    window.addEventListener("resize", tooltipResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", tooltipResize);
})
</script>

<template>
    <component :is="slot" />
    <div :id="'MiO-Tooltip-Content-' + UUID" class="mio-tooltip-content">
        {{ _content }}
    </div>
</template>

<style lang="scss" scoped>
.mio-tooltip-content {
    position: absolute;
    opacity: 0;
    border-radius: 8PX;
    padding: 12PX;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, 1);
    border: 1PX solid rgba(226, 226, 226, 1);
    box-shadow: 0 0 12PX rgba(226, 226, 226, 0.3);
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &:hover {
        cursor: pointer;
    }
}
</style>
