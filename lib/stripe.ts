import { getApp } from "@firebase/app";
import { getFunctions, httpsCallable } from "@firebase/functions";
import { createCheckoutSession, getStripePayments } from "@stripe/firestore-stripe-payments";

const app = getApp();
const payments = getStripePayments(app, {
  customersCollection: "customers",
  productsCollection: "products",
});

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    cancel_url: window.location.origin,
    price: "price_1MeBZdEo3ybXapbbStJiy1TG",
    success_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message));
};

const goToBillingPortal = async () => {
  const instance = getFunctions(app, "asia-northeast1");
  const functionRef = httpsCallable(instance, "ext-firestore-stripe-payments-createPortalLink");

  await functionRef({
    returnUrl: `${window.location.origin}/account`,
  })
    .then(({ data }: any) => window.location.assign(data.url))
    .catch((error) => console.log(error.message));
};

export { loadCheckout, goToBillingPortal };
export default payments;
