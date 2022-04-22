import { CheckIcon } from '@heroicons/react/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loadCheckout } from '../lib/stripe'
import Loader from './Loader'
import Table from './Table'

interface Props {
  products: Product[]
}

export default function Plans({ products }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)
  const [showCards, setShowCards] = useState(false)

  // logout function from customer auth hook
  const { logout, user } = useAuth()

  // grabbing the correct plan user selects
  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(
      selectedPlan?.prices[0].active === true
        ? selectedPlan?.prices[0].id!
        : selectedPlan?.prices[1].id!
    )
    setBillingLoading(true)
  }

  // toggling onclick function for showing/hiding the test cards div
  const toggleCardDiv = () => {
    setShowCards((prevShowCards) => !prevShowCards)
  }

  return (
    <div>
      <Head>
        <title>Netflix | Plans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>

        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            {products.map((product) => (
              <div
                key={product.id}
                // styling conditional for the current subscription option that is selected
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          {/* table info for each option */}
          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Subscribe'
            )}
          </button>

          {/* button for toggling the hidden div showing test cards */}
          <div className="flex flex-col items-center justify-center py-3">
            <button
              className="mx-auto my-4 rounded bg-[#e50914] p-2"
              onClick={toggleCardDiv}
            >
              {!showCards ? ' Show Test Cards From Stripe' : 'Hide Test Cards'}
            </button>

            {/* div showing an image of the test cards for payment screen */}
            {showCards && (
              <div className="flex flex-col items-center justify-center py-4">
                <h4 className="my-3 py-3">
                  Below are test cards you can use for the payment screen
                </h4>
                <Image
                  src="/../public/card-data.png"
                  alt="test"
                  width="650"
                  height="500"
                  className="m-3 rounded border-2 border-[#e50914]"
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
