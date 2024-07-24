this["MiO-UI"] = (function (vue) {
    'use strict';

    const GenerateUUID = () => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    };
    const GetViewportSize = () => {
      return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      };
    };
    const GetNodePosition = node => {
      const _node = node;
      if (_node) {
        const _nodeRect = _node.getBoundingClientRect();
        const _nodeTop = _nodeRect.top;
        const _nodeBottom = _nodeRect.bottom;
        const _nodeLeft = _nodeRect.left;
        const _nodeRight = _nodeRect.right;
        const _viewportWidth = document.documentElement.clientWidth;
        const _viewportHeight = document.documentElement.clientHeight;
        const _viewportTop = 0;
        const _viewportBottom = _viewportHeight;
        const _viewportLeft = 0;
        const _viewportRight = _viewportWidth;
        return {
          top: _nodeTop - _viewportTop,
          bottom: _viewportBottom - _nodeBottom,
          left: _nodeLeft - _viewportLeft,
          right: _viewportRight - _nodeRight
        };
      }
    };
    var GenerateUtils = {
      GenerateUUID: GenerateUUID,
      GetViewportSize: GetViewportSize,
      GetNodePosition: GetNodePosition
    };

    const Utils = {
      GenerateUUID: GenerateUtils.GenerateUUID,
      GetViewportSize: GenerateUtils.GetViewportSize,
      GetNodePosition: GenerateUtils.GetNodePosition
    };

    var script$2 = {
        name: "mio-options",
        props: {
            options: {
                type: Array,
                default: () => []
            }
        },
        inject: [
                "value",
                "updateMethods"
        ],
        methods: {
            handleSelect(value) {
                const _value = value;

                if (_value) {
                    this.updateMethods.value(_value);
                }
            }
        }
    };

    const _hoisted_1$2 = { class: "mio-options" };
    const _hoisted_2$1 = ["onClick"];

    function render$2(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            class: vue.normalizeClass(["mio-options-option", $options.value === option.value ? 'active' : '']),
            onClick: $event => ($options.handleSelect(option.value))
          }, vue.toDisplayString(option.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$1))
        }), 256 /* UNKEYED_FRAGMENT */))
      ]))
    }

    script$2.render = render$2;
    script$2.__scopeId = "data-v-e2265a94";
    script$2.__file = "src/mio-selector/src/Options.vue";

    var script$1 = {
        name: "mio-selector",
        components: {
            Options: script$2
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
                value: vue.computed(() => this.value),
                updateMethods: {
                    value: this.updateValue
                }
            }
        },
        data() {
            return {
                UUID: Utils.GenerateUUID(),
                value: null
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
            }
        }
    };

    const _withScopeId = n => (vue.pushScopeId("data-v-6fe49677"),n=n(),vue.popScopeId(),n);
    const _hoisted_1$1 = ["id"];
    const _hoisted_2 = {
      key: 0,
      class: "mio-selector-no-data"
    };
    const _hoisted_3 = {
      key: 0,
      class: "mio-selector-selection"
    };
    const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("div", { class: "mio-selector-icon" }, "⥥", -1 /* HOISTED */));

    function render$1(_ctx, _cache, $props, $setup, $data, $options) {
      const _component_Options = vue.resolveComponent("Options");

      return (vue.openBlock(), vue.createElementBlock("div", {
        id: 'MiO-Selector-' + $data.UUID,
        class: "mio-selector",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.handleClick && $options.handleClick(...args)))
      }, [
        ($props.options.length <= 0)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, "暂无数据"))
          : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
                return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  (option.value === $data.value)
                    ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, vue.toDisplayString(option.label), 1 /* TEXT */))
                    : vue.createCommentVNode("v-if", true)
                ], 64 /* STABLE_FRAGMENT */))
              }), 256 /* UNKEYED_FRAGMENT */)),
              _hoisted_4,
              vue.createVNode(_component_Options, {
                id: 'MiO-Options-' + $data.UUID,
                options: $props.options
              }, null, 8 /* PROPS */, ["id", "options"])
            ], 64 /* STABLE_FRAGMENT */))
      ], 8 /* PROPS */, _hoisted_1$1))
    }

    script$1.render = render$1;
    script$1.__scopeId = "data-v-6fe49677";
    script$1.__file = "src/mio-selector/src/Selector.vue";

    script$1.install = app => {
      app.component(script$1.name, script$1);
    };

    var script = {
        name: "mio-tree",
        data() {
            return {
                UUID: Utils.GenerateUUID()
            };
        }
    };

    const _hoisted_1 = ["id"];

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createElementBlock("div", {
        id: 'MiO-Tree-' + $data.UUID
      }, null, 8 /* PROPS */, _hoisted_1))
    }

    script.render = render;
    script.__file = "src/mio-tree/src/Tree.vue";

    script.install = app => {
      app.component(script.name, script);
    };

    var index = {
      MiOSelector: script$1,
      MiOTree: script
    };

    // TO DELETE: test code
    window.mio_ui = {
      MiOSelector: script$1,
      MiOTree: script
    };

    return index;

})(Vue);
