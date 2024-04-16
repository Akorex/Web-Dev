function makePayment(){
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-5e3401830a1e162f3374f07b70a86d5b-X",
        tx_ref: "txref-199248",
        amount: 2500,
        currency: "NGN",
        payment_options: "card",
        customer: {
            email: "test@mailnator.com",
            phone_number: "09060138509",
            name: "Akorede Adewole",
        },
        customizations: {
            title: "Carona",
            description: "Pay for a ticket",
            logo: "https://checkout.flutterwave.com/assets/img/rave-logo.png"
        },
        callback: function(data){
            console.log("payment callback: ", data);
        },
        onclose: function(){
            console.log('Payment cancelled!');
        }

    })
}

