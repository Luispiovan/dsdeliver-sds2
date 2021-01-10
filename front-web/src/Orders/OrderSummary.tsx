function OrderSummary() {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                <span className="amount-selected-container">
                    <strong className="amount-selected"></strong>
                    PEDIDOS SELECIONADOS      
                </span>
                <span className="order-summary-total">
                    <strong className="amount-selected"></strong>
                    VALOR TOTAL
                </span>
                </div>
                <button className="order-summary-make-order"> FAZER PEDIDO </button>
            </div>
        </div>
    )
}

export default OrderSummary;