function getCart() {
    let raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : {};
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCartCount() {
    const cart = getCart();
    const count = Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('total').textContent = count;
}

function addToCart(product) {
    const cart = getCart();
    if (cart[product.id]) {
        cart[product.id].qty += 1;
    } else {
        cart[product.id] = { ...product, qty: 1 };
    }
    saveCart(cart);
    renderCartCount();
}

document.querySelectorAll('.add-knopka').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = {
            id: btn.dataset.id,
            name: btn.dataset.name,
            price: parseFloat(btn.dataset.price)
        };
        addToCart(product);
        btn.textContent = "Added!";
        setTimeout(() => btn.textContent = "Add to korzinka", 800);
    });
});

renderCartCount();
