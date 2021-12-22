import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import Image from 'next/image';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const PreviewPage = () => {
  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);

    if (success !== undefined || canceled !== undefined) {


      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
      }

      if (canceled) {
        console.log("Order canceled -- continue to shop around and checkout when youre ready.");
      }

    }
  }, [success, canceled]);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <section className='mb-10 pb-10'>
        <div>
          <Image
            src="https://d1wqzb5bdbcre6.cloudfront.net/991718eb63bbd76ee1c13c82ee0e52ae515f01be83618f471b8415dade8089b3/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878536e6443556d74494e5778734d577857656b4e7a66475a735833526c633352665a48524e5a334a764e58525054466c5a4e58707662546c7054555668626d644a303031587763306c3354"
            alt="powder"
            width={150}
            height={150}
          />
          <div className=''>
            <h3>Whey Protein Powder</h3>
            <h5>$79.99</h5>
          </div>
        </div>
        <button className='border bg-blue-700 px-4 py-3 text-white font-bold' type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
};

export default PreviewPage;