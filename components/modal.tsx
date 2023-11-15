import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const CustomModal = ({ buttonLabel,
    title,
    content,
    onCloseButtonLabel,
    onActionButtonLabel,
    isOpen: propIsOpen,
    onOpen: propOnOpen,
    onClose: propOnClose }: {
        buttonLabel?: string;
        title?: string;
        content?: React.ReactNode;
        onCloseButtonLabel?: string;
        onActionButtonLabel?: string;
        isOpen?: boolean;
        onOpen?: () => void;
        onClose?: () => void;
    }
) => {


    const { isOpen, onOpen, onClose } = useDisclosure();

    const modalIsOpen = propIsOpen !== undefined ? propIsOpen : isOpen;
    
    return (
        <>
            <Modal isOpen={modalIsOpen} onOpenChange={propOnClose || onClose}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title || "Modal Title"}</ModalHeader>
                            <ModalBody>{content}</ModalBody>
                            <ModalFooter>
                                {/* <Button color="danger" variant="light" onPress={propOnClose || onClose}>
                                    {onCloseButtonLabel || "Close"}
                                </Button> */}
                                <Button color="primary" onPress={propOnClose || onClose}>
                                    {onActionButtonLabel || "Action"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default CustomModal