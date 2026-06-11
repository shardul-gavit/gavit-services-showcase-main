type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export const pushDataLayer = (event: DataLayerEvent) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

export const trackGenerateLead = (formName: string) => {
  pushDataLayer({
    event: "generate_lead",
    form_name: formName,
    page_url: window.location.href,
  });
};

export const trackWhatsAppClick = (clickUrl = "https://wa.me/918141381255") => {
  pushDataLayer({
    event: "whatsapp_click",
    click_url: clickUrl,
    page_url: window.location.href,
  });
};

export const trackPhoneClick = () => {
  pushDataLayer({
    event: "phone_click",
    page_url: window.location.href,
  });
};
