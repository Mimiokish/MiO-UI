import GenerateUtils from "./GeneralUtils.js";
import PopoverUtils from "./PopoverUtils.js";

export class Utils {
    #generalUtils;
    #popoverUtils;

    GenerateUUID;
    GetViewportSize;
    GetNodePosition;

    PopoverAppend;
    PopoverShowNode;
    PopoverHideNode;

    constructor() {
        // private
        this.#generalUtils = new GenerateUtils();
        this.#popoverUtils = new PopoverUtils();

        // general
        this.GenerateUUID = this.#generalUtils.GenerateUUID.bind(this.#generalUtils);
        this.GetViewportSize = this.#generalUtils.GetViewportSize.bind(this.#generalUtils);
        this.GetNodePosition = this.#generalUtils.GetNodePosition.bind(this.#generalUtils);

        // popover
        this.PopoverAppend = this.#popoverUtils.Append.bind(this.#popoverUtils);
        this.PopoverShowNode = this.#popoverUtils.ShowNode.bind(this.#popoverUtils);
        this.PopoverHideNode = this.#popoverUtils.HideNode.bind(this.#popoverUtils);
    }

    Initialize() {
        this.#popoverUtils.Initialize();
    }
}

export default new Utils();
