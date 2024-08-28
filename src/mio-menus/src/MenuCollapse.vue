<script>
export default {
    name: "mio-menu-collapse"
}
</script>

<script setup>
import { inject, ref, watch } from "vue";
import { useRouter } from "vue-router";

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

const updateMethods = inject("updateMethods");
const active = inject("active");
const isCollapse = ref(true);
const router = useRouter();

function handleCollapse(event) {
    if (event.target.className === "mio-menu-collapse-icon") {
        event.stopPropagation();
        isCollapse.value = !isCollapse.value;
        emits("update:collapsed", isCollapse.value);
        updateMethods.setActive(props.index);
    } else {
        if (props.path || props.url) {
            if (props.url) {
                window.open(props.url, "_blank");
            }

            if (props.path) {
                router.push(props.path);
            }
            updateMethods.setActive(props.index);
        } else {
            isCollapse.value = !isCollapse.value;
            emits("update:collapsed", isCollapse.value);
            updateMethods.setActive(props.index);
        }
    }
}

watch(() => props.collapsed, (newValue) => {
    isCollapse.value = newValue;
}, { immediate: true });
</script>

<template>
    <div class="mio-menu-collapse">
        <div class="mio-menu-collapse-title" :class="active === props.index ? (isCollapse ? 'active' : 'active collapsed') : (isCollapse ? '' : 'collapsed')" @click="handleCollapse">
            <slot name="title" />
            <div class="mio-menu-collapse-icon" @click="handleCollapse">&#10094;</div>
        </div>
        <div class="mio-menu-collapse-content" :class="isCollapse ? 'collapsed' : ''">
            <slot name="content" />
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
.mio-menu-collapse {
    box-sizing: border-box;
    margin-left: 16PX;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .mio-menu-collapse-title {
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
                transform: translateY(-50%) rotate(90deg);
            }
        }

        .mio-menu-collapse-icon {
            position: absolute;
            right: 10PX;
            top: 50%;
            transform: translateY(-50%);
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
        display: flex;
        flex-direction: column;
        transform: translateY(0);
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        overflow: hidden;
        opacity: 1;

        &.collapsed {
            overflow: hidden;
            transform: translateY(-30%);
            height: 0;
            pointer-events: none;
            opacity: 0;
        }
    }
}
</style>
