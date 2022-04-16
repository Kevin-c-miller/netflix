import { XIcon } from '@heroicons/react/outline'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

export default function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] ">
          <XIcon className="h-6 w-6" />
        </button>
      </>
    </MuiModal>
  )
}
