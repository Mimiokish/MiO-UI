export default class PopoverUtils {
    #nodePopover = null;

    constructor() {}

    #getPosition(node) {
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
    }

    #setDirection(node, nodeParent, placement) {
        const _node = node;
        const _nodeParent = nodeParent;
        let _placement = placement;

        if (!_node || !_nodeParent) {
            return false;
        } else {
            const _nodeHeight = _node.offsetHeight;
            const _nodeWidth = _node.offsetWidth;
            const _parentPosition = this.#getPosition(_nodeParent);

            _node.classList.remove("top", "bottom", "left", "right");

            switch (_placement) {
                case "top":
                    if ((_parentPosition.top * 0.96) < _nodeHeight) {
                        _placement = "bottom";
                    } else {
                        _placement = "top";
                    }
                    break;
                case "bottom":
                    if ((_parentPosition.bottom * 0.96) < _nodeHeight) {
                        _placement = "top";
                    } else {
                        _placement = "bottom";
                    }
                    break;
                case "left":
                    if ((_parentPosition.left * 0.96) < _nodeWidth) {
                        _placement = "right";
                    } else {
                        _placement = "left";
                    }
                    break;
                case "right":
                    if ((_parentPosition.right * 0.96) < _nodeWidth) {
                        _placement = "left";
                    } else {
                        _placement = "right";
                    }
                    break;
                default:
                    _placement = "bottom";
            }

            // check four sides
            switch (_placement) {
                case "top":
                case "bottom":
                    if ((_parentPosition.right * 0.96) < _nodeWidth) {
                        _placement = "left";
                    }
                    if ((_parentPosition.left * 0.96) < _nodeWidth) {
                        _placement = "right";
                    }
                    break
                case "right":
                case "left":
                    if ((_parentPosition.bottom * 0.96) < _nodeHeight) {
                        _placement = "top";
                    }
                    if ((_parentPosition.top * 0.96) < _nodeHeight) {
                        _placement = "bottom";
                    }
                    break;
            }

            _node.classList.add(_placement);

            return _placement;
        }
    }

    #setPosition(node, nodeParent, placement, offset) {
        const _node = node;
        const _nodeParent = nodeParent;
        let _placement = placement;
        const _offset = offset;

        if (!_node) {
            return false;
        } else {
            _placement = this.#setDirection(_node, _nodeParent, _placement);
            const _nodeHeight = _node.offsetHeight;
            const _nodeWidth = _node.offsetWidth;
            const _parentPosition = this.#getPosition(_nodeParent);

            switch (_placement) {
                case "top":
                    _node.style.transform = `translateX(${ (_parentPosition.left + (_nodeParent.offsetWidth / 2)) - (_nodeWidth / 2) }PX) translateY(${ _parentPosition.top - _nodeHeight - offset }PX)`;
                    _node.style.transformOrigin = "bottom center"
                    break;
                case "bottom":
                    _node.style.transform = `translateX(${ (_parentPosition.left + (_nodeParent.offsetWidth / 2)) - (_nodeWidth / 2) }PX) translateY(${ _parentPosition.top + _nodeParent.offsetHeight + offset }PX)`;
                    _node.style.transformOrigin = "top center"
                    break;
                case "left":
                    _node.style.transform = `translateX(${ _parentPosition.left - _nodeWidth - offset }PX) translateY(${ (_parentPosition.top + (_nodeParent.offsetHeight / 2)) - (_nodeHeight / 2) }PX)`;
                    _node.style.transformOrigin = "right center"
                    break;
                case "right":
                    _node.style.transform = `translateX(${ _parentPosition.left + _nodeParent.offsetWidth + offset }PX) translateY(${ (_parentPosition.top + (_nodeParent.offsetHeight / 2)) - (_nodeHeight / 2) }PX)`;
                    _node.style.transformOrigin = "left center"
                    break;
                default:
            }
        }
    }

    #setActivateStyle(node) {
        const _node = node;

        if (!_node) {
            return false;
        } else {
            _node.style.display = "flex";

            setTimeout(() => {
                _node.style.pointerEvents = "auto";
                _node.style.opacity = 1
            })
        }
    }

    #setDeactivateStyle(node) {
        const _node = node;

        if (!_node) {
            return false;
        } else {
            _node.style.pointerEvents = "none";
            _node.style.opacity = 0

            setTimeout(() => {
                _node.style.display = "none";
            }, 250)
        }
    }

    Initialize() {
        this.#nodePopover = document.getElementById("MiO-Popover-0011");
        if (!this.#nodePopover) {
            this.#nodePopover = document.createElement("div");
            this.#nodePopover.id = "MiO-Popover-0011";
            this.#nodePopover.style.position = "absolute";
            this.#nodePopover.style.left = 0;
            this.#nodePopover.style.top = 0;
            this.#nodePopover.style.width = "100%";
            this.#nodePopover.style.height = "100%";
            this.#nodePopover.style.background = "transparent";
            this.#nodePopover.style.pointerEvents = "none";
            document.body.appendChild(this.#nodePopover);
        }
    }

    Append(node, nodeParent, placement, offset) {
        const _node = node;
        const _nodeParent = nodeParent;
        const _placement = placement;
        const _offset = offset;

        if (!_node || !_nodeParent) {
            return false;
        } else {
            this.#nodePopover.append(_node);

            this.#setPosition(_node, _nodeParent, _placement, _offset);

            this.#setDeactivateStyle(_node);
        }
    }

    HideAll() {
        if (this.#nodePopover) {
            const len = this.#nodePopover.children.length;
            for (let i = 0; i < len; i++) {
                this.#nodePopover.children[i].style.display = "none";
            }
        }
    }

    HideNode(node) {
        const _node = node;

        if (!_node) {
            return false;
        } else {
            _node.classList.remove("active");

            this.#setDeactivateStyle(_node);
        }
    }

    ShowNode(node, nodeParent, placement, offset) {
        const _node = node;
        const _nodeParent = nodeParent;
        const _placement = placement;
        const _offset = offset;

        if (!_node || !_nodeParent) {
            return false;
        } else {
            _node.classList.add("active");

            this.#setPosition(_node, _nodeParent, _placement);
            this.#setActivateStyle(_node, _offset);
        }
    }
}
