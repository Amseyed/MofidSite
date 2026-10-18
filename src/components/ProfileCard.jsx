import { useState } from 'react'
import './ProfileCard.css'

/**
 * ProfileCard — circular portrait card for the Mofid School registry.
 * Props: image, name, role, alt?
 */
export default function ProfileCard({ image, name, role, alt }) {
  const [imgFailed, setImgFailed] = useState(false)
  const initials = (name || '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('')

  return (
    <article className="pcard" tabIndex={0}>
      <div className="pcard__photo-wrap">
        {!imgFailed && image ? (
          <img
            className="pcard__photo"
            src={image}
            alt={alt || `${name} - ${role}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="pcard__photo pcard__photo--fallback" aria-label={alt || `${name} - ${role}`}>
            <span className="pcard__initials">{initials}</span>
          </div>
        )}
      </div>
      <div className="pcard__body">
        <h3 className="pcard__name">{name}</h3>
        <span className="pcard__role">{role}</span>
      </div>
    </article>
  )
}
