import { Form, Drawer, Modal } from "antd"

export const FormComp = ({ onClose, visible, open }) => {

    return (
        <>
            <Modal title='Add Records' visible={open} onOk={visible} onCancel={onClose}>
                
            </Modal>

        </>
    )
}
