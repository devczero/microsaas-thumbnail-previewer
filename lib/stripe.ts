import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-09-30.acacia",
    typescript: true
})

export const getStripeSession = async ({
    priceId,
    domainUrl,
    customerId,
} : {
    priceId: string;
    domainUrl: string;
    customerId: string;
}) => {
    if (!domainUrl) {
        throw new Error('Domain URL is required')
    }

    const session = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: "subscription",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ],
        success_url: `${domainUrl}/dashboard?success=true`,
        cancel_url: `${domainUrl}/dashboard?canceled=true`,
        metadata: {
            customerId
        }
    })

    return session.url as string
}


export async function createCustomerPortal(customerId: string): Promise<string> {
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.NEXT_PUBLIC_URL}/pricing`
    })

    return portalSession.url as string
}

