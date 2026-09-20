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
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </div>
  )
}
