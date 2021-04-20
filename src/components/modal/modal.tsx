import { Modal as ModalElement } from 'reactstrap'
import { useState } from 'react'
import { createHtmlElement } from '../../functions/utils'
import { Button, Paragraph, H5 } from '../../global.css'
import { ModalView } from './modal.css'

interface ModalProps {
    item: string
    title: string
}

const Modal = ({ item, title }: ModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>{'More Details'}</Button>
            <ModalElement isOpen={isModalOpen}>
                <ModalView>
                    <H5>{title}</H5>
                    <Paragraph dangerouslySetInnerHTML={createHtmlElement(item)} />
                    <Button onClick={() => setIsModalOpen(false)}>{'Cancel'}</Button>
                </ModalView>
            </ModalElement>
        </>
    )
}

export default Modal