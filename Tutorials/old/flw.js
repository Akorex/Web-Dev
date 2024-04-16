function makePayment(){
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X",
        tx_ref: "txref-DI0NzMx13",
        amount: 2500,
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        meta: {
            source: "docs-inline-test",
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "test@mailnator.com",
            phone_number: "09060138509",
            name: "Akorede Adewole",
        },
        customizations: {
            title: "Carona",
            description: "Test Payment",
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