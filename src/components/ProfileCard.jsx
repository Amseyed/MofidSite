import { useState } from 'react'
import './ProfileCard.css'

/**
 * ProfileCard — reusable member card for the Mofid School registry.
 *
 * Props:
 *  - image: string  -> portrait URL
 *  - name:  string  -> person's full name (Persian)
 *  - role:  string  -> role / title (e.g. "دبیر", "عضو انجمن اولیا و مربیان")
 *  - alt?:  string  -> optional alt text override (defaults to `${name} - ${role}`)
 *
 * The card keeps a frozen silhouette (fixed min-height) so long names never
 * shatter the grid. Branding stays in the card structure, never on the photo.
 */
export default function ProfileCard({ image, name, role, alt }) {
  const [imgFailed, setImgFailed] = useState(false)
  const initials = (name || '').trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('')

  return (
    <article className="profile-card" tabIndex={0}>
      {/* Aperture: soft-rectangular portrait frame */}
      <div className="profile-card__aperture">
        {!imgFailed && image ? (
          <img
            className="profile-card__portrait"
            src={image}
            alt={alt || `${name} - ${role}`}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="profile-card__portrait profile-card__portrait--fallback" aria-label={alt || `${name} - ${role}`}>
            <span className="profile-card__initials">{initials}</span>
          </div>
        )}
        <div className="profile-card__aperture-fade" aria-hidden="true" />
      </div>

      {/* Identity block */}
      <div className="profile-card__identity">
        <span className="profile-card__role">{role}</span>
        <h3 className="profile-card__name">{name}</h3>
        <span className="profile-card__line" aria-hidden="true" />
      </div>

      {/* Subtle Mofid watermark — texture, not a label */}
      <span className="profile-card__watermark" aria-hidden="true">مفید</span>
    </article>
  )
}
