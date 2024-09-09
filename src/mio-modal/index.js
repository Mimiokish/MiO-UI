import Modal from "./src/Modal.vue";
import ModalHeader from "./src/ModalHeader.vue";
import ModalBody from "./src/ModalBody.vue";
import ModalFooter from "./src/ModalFooter.vue";

Modal.install = (app) => {
    app.component(Modal.name, Modal);
    app.component(ModalHeader.name, ModalHeader);
    app.component(ModalBody.name, ModalBody);
    app.component(ModalFooter.name, ModalFooter);
};

export default Modal;
