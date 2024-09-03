import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../styles/PaymentForm.css'; // Ensure this path is correct

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [planId] = useState('plan_id_from_stripe_dashboard'); // Replace with your actual plan ID
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
                email,
            },
        });

        if (error) {
            setErrorMessage(error.message);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    paymentMethodId: paymentMethod.id,
                    planId,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create subscription');
            }

            const data = await response.json();
            setSuccessMessage('Subscription successful!');
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <label htmlFor="email">
                Email
                <input 
                    type="email" 
                    id="email"
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    aria-label="Email"
                />
            </label>
            <CardElement />
            <button type="submit" disabled={!stripe || loading} className="submit-button">
                {loading ? 'Processing...' : 'Subscribe'}
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
    );
};

export default PaymentForm;

