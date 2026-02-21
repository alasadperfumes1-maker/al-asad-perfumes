// src/lib/whatsapp.js

const WHATSAPP_NUMBER = "923192419226"; 
export function generateWhatsAppURL(product) {
  const message = `
Assalam o Alaikum,

I would like to order:

Product: ${product.name}
Size: ${product.size}
Price: Rs. ${product.price}

Please confirm availability.

Thank you.
`;

  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsAppOrder(product) {
  const url = generateWhatsAppURL(product);
  window.open(url, "_blank");
}