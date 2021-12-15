import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent
        width={'auto'}
        maxWidth={'900px'}
        height={'auto'}
        bg={'pGray.800'}
      >
        <ModalBody
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          padding={0}
        >
          <Image
            width={'100%'}
            height={'100%'}
            maxHeight={'600px'}
            borderTopRadius="md"
            src={imgUrl}
          />
        </ModalBody>

        <ModalFooter
          justifyContent={'flex-start'}
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
