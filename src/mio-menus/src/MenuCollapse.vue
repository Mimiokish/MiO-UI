<script>
export default {
    name: "mio-menu-collapse"
}
</script>

<script setup>
import { inject, ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import Utils from "../../utils/index.js";

const props = defineProps({
    index: {
        type:  [ String, Number ],
        required: true
    },
    path: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    collapsed: {
        type: Boolean,
        required: false,
        default: true
    }
});
const emits = defineEmits(["update:collapsed"]);
const router = useRouter();

const updateMethods = inject("updateMethods");
const configs = inject("configs");
const active = inject("active");
const UUID = Utils.GenerateUUID();
const isCollapsed = ref(true);
let collapseId = null;
let expandId = null;

function handleCollapse(event) {
    if (!configs.accordion) {
        handleCollapseAccordion(event);
    } else {
        handleCollapseAccordion(event);
    }
}

function handleCollapseDefault(event) {

}

function handleCollapseAccordion(event) {
    if (event.target.className === "mio-menu-collapse-icon") {
        event.stopPropagation();

        // set active
        updateMethods.setActive(props.index);

        // set collapse
        isCollapsed.value = !isCollapsed.value;
        emits("update:collapsed", isCollapsed.value);

        handleAnimations();
    } else {
        if (props.path || props.url) {
            if (props.url) {
                window.open(props.url, "_blank");
            }

            if (props.path) {
                router.push(props.path);
            }

            // set active
            updateMethods.setActive(props.index);
        } else {
            // set active
            updateMethods.setActive(props.index);

            // set collapse
            isCollapsed.value = !isCollapsed.value;
            emits("update:collapsed", isCollapsed.value);

            handleAnimations();
        }
    }
}

function handleAnimations() {
    if (isCollapsed.value) {
        collapse();
    } else {
        expand();
    }
}

function collapse() {
    const nodeContent = document.getElementById('MiO-Menu-Collapse-Content-' + UUID);
    if (!nodeContent) {
        return false;
    } else {
        clearInterval(expandId);
        clearInterval(collapseId);
        let maxHeight = nodeContent.scrollHeight;
        collapseId = setInterval(frame, 10);

        function frame() {
            if (maxHeight <= 0) {
                nodeContent.style.maxHeight = "0";
                clearInterval(collapseId);
            } else {
                maxHeight -= 5;
                nodeContent.style.maxHeight = maxHeight + "PX";
            }
        }
    }
}

function expand() {
    const nodeContent = document.getElementById('MiO-Menu-Collapse-Content-' + UUID);
    if (!nodeContent) {
        return false;
    } else {
        clearInterval(collapseId);
        clearInterval(expandId);
        let maxHeight = 0;
        expandId = setInterval(frame, 10);

        function frame() {
            if (maxHeight >= nodeContent.scrollHeight) {
                nodeContent.style.maxHeight = null;
                clearInterval(expandId);
            } else {
                maxHeight += 5;
                nodeContent.style.maxHeight = maxHeight + "PX";
            }
        }
    }
}

watch(() => props.collapsed, (newValue) => {
    isCollapsed.value = newValue;
}, { immediate: true, deep: true });

onMounted(() => {
    handleAnimations();
})
</script>

<template>
    <div :id="'MiO-Menu-Collapse-' + UUID" class="mio-menu-collapse">
        <div class="mio-menu-collapse-title" :class="isCollapsed ? (active === props.index ? 'active collapsed' : 'collapsed') : (active === props.index ? 'active' : '')" @click="handleCollapse">
            <slot name="title" />
            <div class="mio-menu-collapse-icon" @click="handleCollapse">&#10094;</div>
        </div>
        <div :id="'MiO-Menu-Collapse-Content-' + UUID" class="mio-menu-collapse-content" :class="isCollapsed ? 'collapsed' : ''">
            <slot name="content" />
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.mio-menu-collapse {
    position: relative;
    box-sizing: border-box;
    margin-left: 16PX;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 38PX;

    .mio-menu-collapse-title {
        z-index: 2;
        position: relative;
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 0 0 38PX;
        width: 100%;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: rgba(246, 246, 246, 1);
        }

        &.active {
            color: rgba(46, 166, 246, 0.9);
        }

        &.collapsed {
            .mio-menu-collapse-icon {
                transform: translateY(-50%);
            }
        }

        .mio-menu-collapse-icon {
            position: absolute;
            right: 10PX;
            top: 50%;
            transform: translateY(-50%) rotate(-90deg);
            width: 26PX;
            height: 26PX;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12PX;
            font-weight: 600;
            color: rgba(45, 45, 45, 0.6);
            transition-duration: 0.25s;
            transition-timing-function: ease-in-out;
        }
    }

    .mio-menu-collapse-content {
        z-index: 1;
        overflow: hidden;
        opacity: 1;
        display: flex;
        flex-direction: column;
        //transform: translateY(0);
        transform-origin: top center;
        transition-duration: 0.5s, 0.5s;
        transition-property: opacity, transform;
        //transition-property: max-height, opacity, transform;
        //transition-timing-function: ease-in-out, ease-in-out, ease-in-out;

        &.collapsed {
            pointer-events: none;
            opacity: 0;
            //transform: translateY(-200PX);
            transition-duration: 0.5s, 0.5s;
            transition-property: opacity, transform;
            transition-timing-function: ease-in-out, ease-in-out;
            //transition-property: max-height, opacity, transform;
            //transition-timing-function: ease-in-out, ease-in-out, ease-in-out;
        }
    }
}
</style>
