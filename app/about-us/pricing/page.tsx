import BredCrumbServices from '@/components/BreadCrumbServices'
import Link from 'next/link'

const page = () => {
  return (
    <div>
         <BredCrumbServices
        title="Pricing"
        subtitle={
          <span>
            <Link className="hover:underline" href="/about-us">
              About Us
            </Link>{" "}
            - <span>Pricing</span>
          </span>
        }
      />

    </div>
  )
}

export default page