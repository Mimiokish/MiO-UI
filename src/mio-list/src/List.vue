<script>
export default {
    name: "mio-list"
}
</script>

<script setup>
import { ref, provide, watch } from "vue";
import Utils from "../../utils";

const props = defineProps({
    mode: {
        type: String,
        default: "default"
    }
});

const UUID = Utils.GenerateUUID();
const mode = ref("accordion");
const activeMarker = ref("");

provide("activeMarker", activeMarker);
provide("updateMethods", {
    active: updateActiveMarker,
    activate: activate,
    deactivate: deactivate
});

watch(props.mode, (newVal) => {
    switch (newVal) {
        case "accordion":
        case "Accordion":
            mode.value = "accordion";
            break;
        default:
            mode.value = "default";
            break;
    }
})

function activate(marker) {
    const _newMaker = marker.split("-");
    const _latestMarker = activeMarker.value.split("-");

    switch (mode.value) {
        case "accordion":
        case "Accordion":
            activateAccordion(_newMaker.join("-"));
            break;
        default:
            activateDefault(_newMaker.join("-"));
            break;
    }
}
function deactivate(marker) {
    const _newMaker = marker.split("-");
    const _latestMarker = activeMarker.value.split("-");

    switch (mode.value) {
        case "accordion":
            deactivateAccordion();
            break;
        default:
            deactivateDefault();
            break;
    }
}
function activateDefault(marker) {}
function activateAccordion(marker) {
    const _newMarker = marker.split("-");
    const len = _newMarker.length;

    if (len > 0) {
        for (let idx = 0; idx < len; idx++) {
            const tempMarker = _newMarker.slice(0, idx + 1).join("-");

            const _nodeItem = document.getElementById("MiO-List-Item-" + tempMarker);
            if (_nodeItem) {
                _nodeItem.classList.add("active");
            }

            const _nodeContent = document.getElementById("MiO-List-Item-Content-" + tempMarker);
            if (_nodeContent) {
                _nodeContent.classList.add("active");
            }

            const _nodeChildren = document.getElementById("MiO-List-Item-Children-" + tempMarker);
            if (_nodeChildren) {
                _nodeChildren.classList.add("expend");
            }
        }
    }

}
function deactivateDefault() {
}
function deactivateAccordion() {
    const _latestMarker = activeMarker.value.split("-");
    const len = _latestMarker.length;

    if (len > 0) {
        for (let idx = len; idx > 0; idx--) {
            const tempMarker = _latestMarker.slice(0, idx).join("-");

            const _nodeItem = document.getElementById("MiO-List-Item-" + tempMarker);
            if (_nodeItem) {
                _nodeItem.classList.remove("active");
            }

            const _nodeContent = document.getElementById("MiO-List-Item-Content-" + tempMarker);
            if (_nodeContent) {
                _nodeContent.classList.remove("active");
            }

            const _nodeChildren = document.getElementById("MiO-List-Item-Children-" + tempMarker);
            if (_nodeChildren) {
                _nodeChildren.classList.remove("expend");
            }
        }
    }
}
function updateActiveMarker(marker) {
    const _marker = marker;

    if (_marker) {
        activeMarker.value = _marker;
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
