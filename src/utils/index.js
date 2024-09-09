import GenerateUtils from "./GeneralUtils.js";
import PopoverUtils from "./PopoverUtils.js";

export class Utils {
    #generalUtils;
    #popoverUtils;

    GenerateUUID;
    GetViewportSize;
    GetNodePosition;
    General = {
        GenerateUUID: null,
        GetViewportSize: null,
        GetNodePosition: null
    }

    Popover = {
        Append: null,
        ShowNode: null,
        HideNode: null,
        GetPosition: null,
        SetPosition: null,
        SetDirection: null,
        SetActivateStyle: null,
        SetDeactivateStyle: null
    }

    constructor() {
        // private
        this.#generalUtils = new GenerateUtils();
        this.#popoverUtils = new PopoverUtils();

        // general
        this.General.GenerateUUID = this.#generalUtils.GenerateUUID.bind(this.#generalUtils);
        this.General.GetViewportSize = this.#generalUtils.GetViewportSize.bind(this.#generalUtils);
        this.General.GetNodePosition = this.#generalUtils.GetNodePosition.bind(this.#generalUtils);

        // popover
        this.Popover.Append = this.#popoverUtils.Append.bind(this.#popoverUtils);
        this.Popover.ShowNode = this.#popoverUtils.ShowNode.bind(this.#popoverUtils);
        this.Popover.HideNode = this.#popoverUtils.HideNode.bind(this.#popoverUtils);
        this.Popover.GetPosition = this.#popoverUtils.GetPosition.bind(this.#popoverUtils);
        this.Popover.SetPosition = this.#popoverUtils.SetPosition.bind(this.#popoverUtils);
        this.Popover.SetDirection = this.#popoverUtils.SetDirection.bind(this.#popoverUtils);
        this.Popover.SetActivateStyle = this.#popoverUtils.SetActivateStyle.bind(this.#popoverUtils);
        this.Popover.SetDeactivateStyle = this.#popoverUtils.SetDeactivateStyle.bind(this.#popoverUtils);
    }

    Initialize() {
        this.#popoverUtils.Initialize();
    }
}

export default new Utils();
