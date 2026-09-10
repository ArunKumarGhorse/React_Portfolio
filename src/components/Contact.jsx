import { Mail, Phone, MapPin } from 'lucide-react'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-border scroll-mt-20">
      <h3 className="font-head text-xl font-semibold">Contact</h3>
      <p className="mt-2 text-soft max-w-prose">
        Reach out directly — I check email daily and reply within a day or two.
      </p>

      <div className="mt-8 space-y-4">
        <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm hover:text-pine transition-colors w-fit">
          <Mail size={16} className="text-faint" />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm hover:text-pine transition-colors w-fit">
          <Phone size={16} className="text-faint" />
          {profile.phone}
        </a>
        <div className="flex items-start gap-3 text-sm text-soft max-w-prose">
          <MapPin size={16} className="text-faint mt-0.5 shrink-0" />
          {profile.location}
        </div>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block px-5 py-2.5 bg-ink text-paper text-sm font-medium rounded-sm hover:opacity-80 transition-opacity"
      >
        Send an email
      </a>
    </section>
  )
}
