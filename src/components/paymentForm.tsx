export default function PaymentForm() {
    return (
        <form>
            <input type="text" placeholder="Cardholder's Name" name="card-name"/>
            <input type="text" placeholder="Card Number" name="card-number"/>
            <input type="text" placeholder="MM/YY Expiry Date" name="card-date"/>
            <input type="text" placeholder="CVV" name="card-cvv"/>
        </form>
    )
}