<script>
import Utils from "../../utils";
import { computed } from "vue";

export default {
    name: "mio-list",
    components: {
    },
    props: {
        mode: {
            type: String,
            default: "accordion"
        }
    },
    provide() {
        return {
            activeMarker: computed(() => this.activeMarker),
            updateMethods: {
                active: this.updateActiveMarker,
                activate: this.activate,
                deactivate: this.deactivate
            }
        }
    },
    data() {
        return {
            UUID: Utils.GenerateUUID(),
            _mode: "accordion",
            activeMarker: ""
        };
    },
    watch: {
        mode: {
            handler(newVal) {
                switch (newVal) {
                    case "accordion":
                    case "Accordion":
                        this._mode = "accordion";
                        break;
                    default:
                        this._mode = "default";
                        break;
                }
            }
        }
    },
    methods: {
        activate(marker) {
            const _newMaker = marker.split("-");
            const _latestMarker = this.activeMarker.split("-");

            switch (this._mode) {
                case "accordion":
                case "Accordion":
                    this.activateAccordion(_newMaker.join("-"));
                    break;
                default:
                    this.activateDefault(_newMaker.join("-"));
                    break;
            }
        },
        deactivate(marker) {
            const _newMaker = marker.split("-");
            const _latestMarker = this.activeMarker.split("-");

            switch (this._mode) {
                case "accordion":
                    this.deactivateAccordion();
                    break;
                default:
                    this.deactivateDefault();
                    break;
            }
        },
        activateDefault(marker) {},
        activateAccordion(marker) {
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

        },
        deactivateDefault() {
        },
        deactivateAccordion() {
            const _latestMarker = this.activeMarker.split("-");
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
        },
        updateActiveMarker(marker) {
            const _marker = marker;

            if (_marker) {
                this.activeMarker = _marker;
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
