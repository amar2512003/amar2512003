import { useEffect } from 'react'

interface CertificateModalProps {
  src: string
  type: 'pdf' | 'image'
  fileName?: string
  onClose: () => void
}

export function CertificateModal({ src, type, fileName, onClose }: CertificateModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="certificate-modal-backdrop" onClick={onClose}>
      <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="certificate-modal-close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="certificate-modal-body">
          {type === 'pdf' ? (
            <iframe src={src} title="Certificate" className="certificate-modal-frame" />
          ) : (
            <img src={src} alt="Certificate" className="certificate-modal-image" />
          )}
        </div>

        <div className="certificate-modal-footer">
          <a href={src} download={fileName} className="certificate-download-btn">
            Download ↓
          </a>
        </div>
      </div>
    </div>
  )
}
