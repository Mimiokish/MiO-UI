<script>
export default {
    name: "mio-dropdown-trigger"
}
</script>

<script setup>
import { inject, useSlots, onMounted } from "vue";
import Utils from "../../utils/index.js";

const UUID = inject("UUID");
const slots = useSlots();
const eventDocumentClick = handleDocumentClick;

function handleClick() {
    const _nodeDropdownMenu = document.getElementById("MiO-Dropdown-Menu-" + UUID);
    const _nodeDropdownTrigger = document.getElementById("MiO-Dropdown-Trigger-" + UUID);

    _nodeDropdownMenu.classList.toggle("active");
    _nodeDropdownTrigger.classList.toggle("active");

    handlePopupDirection();
}

function handlePopupDirection() {
    const _nodeDropdown = document.getElementById("MiO-Dropdown-" + UUID);
    const _nodeDropdownMenu = document.getElementById("MiO-Dropdown-Menu-" + UUID);
    const _nodeDropdownTrigger = document.getElementById("MiO-Dropdown-Trigger-" + UUID);

    const _dropdownPosition = Utils.GetNodePosition(_nodeDropdown);
    const dropdownHeight = _nodeDropdown.offsetHeight;

    if ((_dropdownPosition.bottom * 0.96) < dropdownHeight) {
        _nodeDropdownTrigger.classList.remove("bottom");
        _nodeDropdownMenu.classList.remove("bottom");
        _nodeDropdownTrigger.classList.add("top");
        _nodeDropdownMenu.classList.add("top");
    } else {
        _nodeDropdownTrigger.classList.remove("top");
        _nodeDropdownMenu.classList.remove("top");
        _nodeDropdownTrigger.classList.add("bottom");
        _nodeDropdownMenu.classList.add("bottom");
    }
}

function handleDocumentClick(event) {
    const _target = event.target;

    if (!_target.id.includes(UUID)) {
        const _nodeDropdownTrigger = document.getElementById("MiO-Dropdown-Trigger-" + UUID);
        const _nodeDropdownMenu = document.getElementById("MiO-Dropdown-Menu-" + UUID);

        _nodeDropdownTrigger.classList.remove("active");
        _nodeDropdownMenu.classList.remove("active");
    }
}

onMounted(() => {
    document.addEventListener("click", eventDocumentClick);

    handlePopupDirection();
});
</script>

<template>
    <div :id="'MiO-Dropdown-Trigger-' + UUID" class="mio-dropdown-trigger" @click="handleClick">
        <div v-if="!slots['icon']" class="mio-dropdown-trigger-label">
            <slot />
        </div>
        <template v-else>
            <div class="mio-dropdown-trigger-label">
                <slot name="label" />
            </div>
            <div class="mio-dropdown-trigger-icon">
                <slot name="icon" />
            </div>
        </template>
    </div>
</template>

<style scoped lang="scss">
.mio-dropdown-trigger {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    .mio-dropdown-trigger-label {
        pointer-events: none;
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        padding: 6PX 16PX;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(46, 46, 46, 0.8);
        font-size: 16PX;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .mio-dropdown-trigger-icon {
        pointer-events: none;
        flex: 0 0 26PX;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(46, 46, 46, 0.8);
        font-size: 16PX;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.top {
        &.active {
            .mio-dropdown-trigger-icon {
                transform: rotate(90deg);
            }
        }
    }

    &.bottom {
        &.active {
            .mio-dropdown-trigger-icon {
                transform: rotate(-90deg);
            }
        }
    }
}
</style>
