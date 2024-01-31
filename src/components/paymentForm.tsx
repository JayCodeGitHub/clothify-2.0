export default function PaymentForm() {
    return (
        <form>
            <label>{`Cardholder's Name`}</label>
            <input type="text" placeholder="Cardholder's Name" name="card-name"/>
            <label>Card Number</label>
            <input type="text" placeholder="Card Number" name="card-number"/>
            <label>Expiry Date</label>
            <input type="text" placeholder="MM/YY" name="card-date"/>
            <label>CVV</label>
            <input type="text" placeholder="CVV" name="card-cvv"/>
        </form>
    )
}