import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex items-center justify-center'>
      <Image
        className="inline-block"
        // src="/leaf.svg"
        src="/logo.svg"
        alt="CBD Suite"
        height={60}
        width={200}
      />
      {/* <span className="text-5xl font-extrabold tracking-tight text-gray-900 ml-1">cbd<span className="text-emerald-500">suite</span></span> */}
    </div>
  )
}
