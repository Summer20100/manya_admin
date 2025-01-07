export class URL {
    /* Onrender */
    static readonly urlOnrenderCategories: string = import.meta.env.VITE_ENV_URL_ONRENDER_CATEGORIES || '';
    static readonly urlOnrenderProducts: string = import.meta.env.VITE_ENV_URL_ONRENDER_PRODUCTS || '';
    static readonly urlOnrenderOrders: string = import.meta.env.VITE_ENV_URL_ONRENDER_ORDERS || '';
    static readonly urlOnrenderClients: string = import.meta.env.VITE_ENV_URL_ONRENDER_CLIENTS || '';

    /* Localserver */
    static readonly urlLocalserverCategories: string = import.meta.env.VITE_ENV_URL_LOCALSERVER_CATEGORIES || '';
    static readonly urlLocalserverProducts: string = import.meta.env.VITE_ENV_URL_LOCALSERVER_PRODUCTS || '';
    static readonly urlLocalserverOrders: string = import.meta.env.VITE_ENV_URL_LOCALSERVER_ORDERS || '';
    static readonly urlLocalserverClients: string = import.meta.env.VITE_ENV_URL_LOCALSERVER_CLIENTS || '';
  }
  