import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments'
import { getFunctions, httpsCallable } from '@firebase/functions'
import app from '../firebase'

// stripe functions for payments from firebase database
const payments = getStripePayments(app, {
  productsCollection: 'products',
  customersCollection: 'customers',
})

// load the checkout from stripe
const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url)) // if all is successful -> navigate to a stripe payment portal
    .catch((error) => console.log(error.message))
}

// redirect back to billing protal
const goToBilling = async () => {
  // instance of cloud functions
  const instance = getFunctions(app, 'us-central1')

  // will return url that will redirect user to portal
  const functionRef = httpsCallable(
    instance,
    'ext-firestore-stripe-payments-createPortalLink'
  )

  await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })
    .then(({ data }: any) => window.location.assign(data.url))
    .catch((error) => console.log(error.message))
}

export { loadCheckout, goToBilling }
export default payments
