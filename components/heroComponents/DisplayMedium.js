import Image from '../Image'
import Link from 'next/link'

const DisplayMedium = ({ imageSrc, title, subtitle, link }) => {
  return (
    <div className="
    mb-2 lg:mb-1
    bg-purple-200 p-8 pb-1 hover:bg-purple-300">
      <Link href={`${link}`}>
        <a aria-label={title}>
          <div className="mt-3 flex flex-column justify-center items-center h-50">
            <Image src={imageSrc} alt={title} className="w-3/5" />
          </div>
          <div className="mb-2">
            <p className="text-3xl font-semibold mb-1">{title}</p>
            <p className="text-s text-gray-700">{subtitle}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default DisplayMedium;
