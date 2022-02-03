import {Modal} from "react-bootstrap";

export default function ModalOne({children, ...pageProps}) {

    return (
        <>
            <Modal show={pageProps.section.show}  onHide={pageProps.section.handleClose}  size="lg"  aria-labelledby="contained-modal-title-vcenter"  centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {pageProps.section.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal>
        </>
    )
}