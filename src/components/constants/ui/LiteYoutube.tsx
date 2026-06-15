import { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type LiteYoutubeProps = {
  url: string
  title: string
  className?: string
}

// YouTube's embed JS/cookies cost ~9.5MB and 3.4s CPU per iframe even when
// off-screen. Show a static thumbnail + play button, only mount the real
// iframe (with autoplay) once the user clicks.
function getYoutubeId(url: string): string | null {
  const match = url.match(/(?:embed\/|v=|\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

const iframeProps = {
  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
  referrerPolicy: 'strict-origin-when-cross-origin' as const,
  allowFullScreen: true,
}

const LiteYoutube = ({ url, title, className }: LiteYoutubeProps) => {
  const [loaded, setLoaded] = useState(false)
  const videoId = getYoutubeId(url)

  if (!url) return null

  if (loaded || !videoId) {
    return (
      <iframe className={className} src={loaded ? `${url}${url.includes('?') ? '&' : '?'}autoplay=1` : url} title={title} {...iframeProps} />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Riproduci video: ${title}`}
      className={twMerge('relative block w-full overflow-hidden group cursor-pointer', className)}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-200">
        <FaPlay className="text-white text-4xl drop-shadow-lg" />
      </span>
    </button>
  )
}

export default LiteYoutube
