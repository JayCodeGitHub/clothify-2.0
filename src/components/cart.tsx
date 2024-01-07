interface CartProps {
    isCart: boolean;
    setIsCart: (a: boolean) => void;
  }

export default function Cart({ isCart, setIsCart }: CartProps) {
    return (
        <div>
            <div/>
            <section>
                <div></div>
                <div></div>
                <p>Subtotal:</p>
                <button>Purchase</button>
            </section>
        </div>
    )
}