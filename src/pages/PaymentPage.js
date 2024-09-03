import React from 'react';
import { useLocation } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';

const PaymentPage = () => {
    const location = useLocation();
    const { planId } = location.state || {};  // Get the planId from state

    return (
        <div>
            <h1>Payment Information</h1>
            <p>You have selected the {planId}.</p>
            <PaymentForm planId={planId} />
        </div>
    );
};

export default PaymentPage;
