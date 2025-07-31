declare global {
  interface Window {
    // Zoho Forms API types
    zfpc?: Record<string, any>;
    ZFAP?: {
      parse: () => void;
      init: () => void;
    };
    
    // Existing UTM tracking types
    ZFAdvLead?: {
      utmPNameArr: string[];
      isSameDomian: boolean;
      utmcustPNameArr: string[];
    };
    zfutm_zfAdvLead?: {
      zfautm_gC_enc: (param: string) => string;
    };
    ZFLead?: {
      utmPNameArr: string[];
    };
    zfutm_zfLead?: {
      zfutm_gC_enc: (param: string) => string;
    };
  }
}