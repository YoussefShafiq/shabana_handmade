import { WHATSAPP_PHONE_E164 } from '../../data/products'

export default function WhatsAppOrderButton({ productName, extraMessage = '' }) {
  const message = `Hi Shabana! I want to order: ${productName}.${extraMessage ? ` ${extraMessage}` : ''} Please share payment and delivery details.`

  const href =
    WHATSAPP_PHONE_E164 && WHATSAPP_PHONE_E164 !== 'YOUR_E164_PHONE_NUMBER_HERE'
      ? `https://wa.me/${WHATSAPP_PHONE_E164}?text=${encodeURIComponent(message)}`
      : '#'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-brown px-4 py-2 font-semibold text-white shadow-sm hover:opacity-95 transition"
      aria-label={`Order ${productName} via WhatsApp`}
      onClick={(e) => {
        if (href === '#') {
          e.preventDefault()
          alert('Please set WHATSAPP_PHONE_E164 in src/data/products.js first.')
        }
      }}
    >
      Order via WhatsApp
    </a>
  )
}

