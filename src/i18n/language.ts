import { createContext, useContext } from "react";

export type Language = "en" | "es";

export const translations = {
    en: {
        "nav.product": "Product",
        "nav.pricing": "Pricing",
        "nav.contact": "Contact",
        "nav.login": "Login",
        "cta.requestAccess": "Request access",
        "language.label": "Language",
        "productHero.title": "Stop overpaying your suppliers without realizing it.",
        "productHero.description":
            "DenX automates the comparison of purchase orders, delivery notes, and invoices to detect discrepancies before payment.",
        "productHero.secondaryCta": "See how it works",
        "pricingHero.title": "Simple, transparent pricing for growing teams.",
        "pricingHero.description":
            "Reconciliation tools without complex contracts. Choose the scale that fits your operational needs.",
        "pricing.mostPopular": "Most popular",
        "pricing.month": "/mo",
        "pricing.early.description": "For small teams starting to control supplier invoices.",
        "pricing.growth.description": "For teams with recurring purchases and more review volume.",
        "pricing.enterprise.description": "For high-volume operations that need direct onboarding.",
        "pricing.custom": "Custom",
        "pricing.feature.uniqueInbox": "Unique intake inbox",
        "pricing.feature.500Docs": "Up to 500 documents/month",
        "pricing.feature.classification": "Document classification",
        "pricing.feature.basicAlerts": "Basic discrepancy alerts",
        "pricing.feature.2000Docs": "Up to 2,000 documents/month",
        "pricing.feature.matching": "3-way matching",
        "pricing.feature.tolerances": "Configurable tolerances",
        "pricing.feature.reviewQueue": "Human review queue",
        "pricing.feature.dashboard": "Dashboard with supplier filters",
        "pricing.feature.customVolume": "Custom document volume",
        "pricing.feature.setup": "Dedicated setup support",
        "pricing.feature.audit": "Approval audit trail",
        "pricing.feature.workflows": "Custom review workflows",
        "software.title": "Active Reconciliation",
        "software.badge": "3 Discrepancies detected",
        "software.invoice": "Invoice",
        "software.document": "Document",
        "software.orderedAmount": "Ordered Amount",
        "software.invoicedAmount": "Invoiced Amount",
        "software.status": "Status",
        "software.orderDocument": "Order PO-102",
        "software.deliveryDocument": "Delivery Note AL-998",
        "software.discrepancy": "Discrepancy",
        "software.matches": "Matches",
        "comparison.title": "Manual reconciliation is costing you...",
        "comparison.description": "But with DenX, the process becomes clear and automated.",
        "comparison.manual1.title": "Slow manual process",
        "comparison.manual1.description":
            "Hours spent checking purchase orders, delivery notes, and invoices across emails, PDFs, and spreadsheets.",
        "comparison.denx1.title": "Automatic reception",
        "comparison.denx1.description": "Forward supplier emails to one DenX inbox and keep purchase documents organized from the start.",
        "comparison.manual2.title": "Costly human errors",
        "comparison.manual2.description":
            "Small quantity, price, or tax differences are easy to miss when every check depends on manual review.",
        "comparison.denx2.title": "Structured extraction",
        "comparison.denx2.description": "DenX reads native PDFs, scans, and photos to extract the key fields needed for comparison.",
        "comparison.manual3.title": "Silent money leaks",
        "comparison.manual3.description":
            "Duplicate invoices, incorrect prices, and goods not received can quietly drain margin month after month.",
        "comparison.denx3.title": "Automatic comparison",
        "comparison.denx3.description":
            "Compare purchase order, delivery note, and invoice with configurable tolerance before approving payment.",
        "comparison.final.title": "Final approval with confidence",
        "comparison.final.description": "Review each discrepancy clearly, approve or reject payment, and keep a traceable audit trail.",
        "operations.title": "Automate invoice checks before you pay.",
        "operations.description":
            "DenX compares purchase orders, delivery notes, and invoices so your team can spot discrepancies earlier and reduce manual review.",
        "operations.demo": "View demo",
        "operations.cardTitle": "Reconciliation Status",
        "operations.ready": "Ready for review",
        "processing.title": "Intelligent data processing",
        "processing.description":
            "Turn messy supplier documents into clear checks your team can review before money leaves the business.",
        "processing.extraction.title": "Document extraction",
        "processing.extraction.description":
            "Extract key fields from native PDFs, scans, and supplier documents so the review starts with structured data.",
        "processing.matching.title": "3-way matching",
        "processing.matching.description":
            "Compare purchase order, delivery note, and invoice with tolerance rules before a payment is approved.",
        "processing.review.title": "Human review queue",
        "processing.review.description": "When confidence is low, DenX routes the case for review instead of guessing. Your team keeps control.",
        "processing.coreWorkflow": "Core workflow",
        "processing.delivery": "Delivery",
        "processing.invoice": "Invoice",
        "processing.alerts.title": "Discrepancy alerts",
        "processing.alerts.description":
            "Surface mismatches with the exact field, difference, and review status so the next action is clear.",
        "processing.alert.price.title": "Price mismatch: INV-992",
        "processing.alert.price.description": "Invoice total is above the purchase order amount.",
        "processing.alert.quantity.title": "Quantity variance approved",
        "processing.alert.quantity.description": "Small delivery variance accepted based on configured tolerance.",
        "testimonials.badge": "Early access feedback",
        "testimonials.title": "Designed for teams that cannot afford silent invoice mistakes.",
        "testimonials.description":
            "These example reviews reflect the kind of feedback DenX is built around: less manual checking, clearer discrepancies, and more control before approving payments.",
        "testimonials.review": "Review",
        "testimonials.stars": "5 stars",
        "testimonials.1.role": "Administration manager",
        "testimonials.1.company": "Distribution company",
        "testimonials.1.quote":
            "What interests us most is detecting differences before paying. If DenX helps us avoid checking every invoice by hand, the time saving is clear.",
        "testimonials.2.role": "Operations director",
        "testimonials.2.company": "Industrial supplier",
        "testimonials.2.quote":
            "Having purchase order, delivery note, and invoice compared in one case would change our approval process a lot.",
        "testimonials.3.role": "SMB owner",
        "testimonials.3.company": "Recurring purchases",
        "testimonials.3.quote":
            "I do not need more complicated tools. I need to know whether what I am invoiced matches what I ordered and received.",
        "footer.title": "Stop paying invoice mistakes in silence.",
        "footer.description":
            "Compare purchase orders, delivery notes, and invoices before approving payment. Built for teams that need fewer manual checks and clearer discrepancies.",
        "footer.product": "Product",
        "footer.reconciliation": "Reconciliation",
        "footer.alerts": "Discrepancy alerts",
        "footer.reviewQueue": "Review queue",
        "footer.company": "Company",
        "footer.earlyAccess": "Early access",
        "footer.requestDemo": "Request demo",
        "footer.rights": "All rights reserved.",
        "contactHero.title": "Talk to an expert.",
        "contactHero.description":
            "Get in touch to see how DenX can help your team detect invoice discrepancies before payment.",
        "contactForm.firstName": "First Name",
        "contactForm.lastName": "Last Name",
        "contactForm.workEmail": "Work Email",
        "contactForm.companyName": "Company Name",
        "contactForm.message": "Message",
        "contactForm.firstNamePlaceholder": "Jane",
        "contactForm.lastNamePlaceholder": "Doe",
        "contactForm.emailPlaceholder": "jane@company.com",
        "contactForm.companyPlaceholder": "Acme Corp",
        "contactForm.messagePlaceholder": "Tell us about your reconciliation challenges...",
        "page.contact": "Contact",
        "page.login": "Login",
        "page.requestAccess": "Request Access",
    },
    es: {
        "nav.product": "Producto",
        "nav.pricing": "Precios",
        "nav.contact": "Contacto",
        "nav.login": "Acceder",
        "cta.requestAccess": "Solicitar acceso",
        "language.label": "Idioma",
        "productHero.title": "Deja de pagar de más a tus proveedores sin darte cuenta.",
        "productHero.description":
            "DenX automatiza la comparación de pedidos, albaranes y facturas para detectar discrepancias antes del pago.",
        "productHero.secondaryCta": "Ver cómo funciona",
        "pricingHero.title": "Precios simples y claros para equipos en crecimiento.",
        "pricingHero.description":
            "Herramientas de reconciliación sin contratos complejos. Elige la escala que encaja con tu operativa.",
        "pricing.mostPopular": "Más popular",
        "pricing.month": "/mes",
        "pricing.early.description": "Para equipos pequeños que empiezan a controlar facturas de proveedores.",
        "pricing.growth.description": "Para equipos con compras recurrentes y más volumen de revisión.",
        "pricing.enterprise.description": "Para operaciones de alto volumen que necesitan acompañamiento directo.",
        "pricing.custom": "A medida",
        "pricing.feature.uniqueInbox": "Buzón único de entrada",
        "pricing.feature.500Docs": "Hasta 500 documentos/mes",
        "pricing.feature.classification": "Clasificación de documentos",
        "pricing.feature.basicAlerts": "Alertas básicas de discrepancia",
        "pricing.feature.2000Docs": "Hasta 2.000 documentos/mes",
        "pricing.feature.matching": "Comparación a 3 bandas",
        "pricing.feature.tolerances": "Tolerancias configurables",
        "pricing.feature.reviewQueue": "Cola de revisión humana",
        "pricing.feature.dashboard": "Dashboard con filtros por proveedor",
        "pricing.feature.customVolume": "Volumen de documentos a medida",
        "pricing.feature.setup": "Soporte dedicado de configuración",
        "pricing.feature.audit": "Rastro de auditoría en aprobaciones",
        "pricing.feature.workflows": "Flujos de revisión personalizados",
        "software.title": "Reconciliación activa",
        "software.badge": "3 discrepancias detectadas",
        "software.invoice": "Factura",
        "software.document": "Documento",
        "software.orderedAmount": "Importe pedido",
        "software.invoicedAmount": "Importe facturado",
        "software.status": "Estado",
        "software.orderDocument": "Pedido PO-102",
        "software.deliveryDocument": "Albarán AL-998",
        "software.discrepancy": "Discrepancia",
        "software.matches": "Coincide",
        "comparison.title": "La reconciliación manual te está costando...",
        "comparison.description": "Con DenX, el proceso se vuelve claro y automatizado.",
        "comparison.manual1.title": "Proceso manual lento",
        "comparison.manual1.description":
            "Horas revisando pedidos, albaranes y facturas entre emails, PDFs y hojas de cálculo.",
        "comparison.denx1.title": "Recepción automática",
        "comparison.denx1.description": "Reenvía los emails de proveedores a un buzón DenX y mantén los documentos organizados desde el inicio.",
        "comparison.manual2.title": "Errores humanos caros",
        "comparison.manual2.description":
            "Pequeñas diferencias de cantidad, precio o impuestos son fáciles de pasar por alto en una revisión manual.",
        "comparison.denx2.title": "Extracción estructurada",
        "comparison.denx2.description": "DenX lee PDFs nativos, escaneos y fotos para extraer los campos clave de comparación.",
        "comparison.manual3.title": "Fugas de dinero silenciosas",
        "comparison.manual3.description":
            "Facturas duplicadas, precios incorrectos y mercancía no recibida pueden drenar margen mes tras mes.",
        "comparison.denx3.title": "Comparación automática",
        "comparison.denx3.description":
            "Compara pedido, albarán y factura con tolerancia configurable antes de aprobar el pago.",
        "comparison.final.title": "Aprobación final con confianza",
        "comparison.final.description": "Revisa cada discrepancia con claridad, aprueba o rechaza el pago y conserva un rastro de auditoría.",
        "operations.title": "Automatiza la revisión de facturas antes de pagar.",
        "operations.description":
            "DenX compara pedidos, albaranes y facturas para que tu equipo detecte discrepancias antes y reduzca revisión manual.",
        "operations.demo": "Ver demo",
        "operations.cardTitle": "Estado de reconciliación",
        "operations.ready": "Listo para revisar",
        "processing.title": "Procesamiento inteligente de datos",
        "processing.description":
            "Convierte documentos desordenados de proveedores en comprobaciones claras antes de que salga el dinero.",
        "processing.extraction.title": "Extracción documental",
        "processing.extraction.description":
            "Extrae campos clave de PDFs nativos, escaneos y documentos de proveedor para empezar con datos estructurados.",
        "processing.matching.title": "Comparación a 3 bandas",
        "processing.matching.description":
            "Compara pedido, albarán y factura con reglas de tolerancia antes de aprobar el pago.",
        "processing.review.title": "Cola de revisión humana",
        "processing.review.description": "Cuando la confianza es baja, DenX deriva el caso a revisión en vez de adivinar. Tu equipo mantiene el control.",
        "processing.coreWorkflow": "Flujo principal",
        "processing.delivery": "Albarán",
        "processing.invoice": "Factura",
        "processing.alerts.title": "Alertas de discrepancia",
        "processing.alerts.description":
            "Muestra diferencias con el campo exacto, el importe y el estado de revisión para que el siguiente paso sea claro.",
        "processing.alert.price.title": "Diferencia de precio: INV-992",
        "processing.alert.price.description": "El total de la factura supera el importe del pedido.",
        "processing.alert.quantity.title": "Variación de cantidad aprobada",
        "processing.alert.quantity.description": "Pequeña variación de entrega aceptada según la tolerancia configurada.",
        "testimonials.badge": "Feedback early access",
        "testimonials.title": "Diseñado para equipos que no pueden permitirse errores silenciosos en facturas.",
        "testimonials.description":
            "Estas reviews de ejemplo reflejan el tipo de feedback para el que se construye DenX: menos revisión manual, discrepancias más claras y más control antes de pagar.",
        "testimonials.review": "Review",
        "testimonials.stars": "5 estrellas",
        "testimonials.1.role": "Responsable de administración",
        "testimonials.1.company": "Empresa de distribución",
        "testimonials.1.quote":
            "Lo que más nos interesa es detectar diferencias antes de pagar. Si DenX nos evita revisar cada factura a mano, el ahorro de tiempo es claro.",
        "testimonials.2.role": "Director de operaciones",
        "testimonials.2.company": "Proveedor industrial",
        "testimonials.2.quote":
            "Tener pedido, albarán y factura comparados en un solo expediente cambiaría mucho nuestro proceso de aprobación.",
        "testimonials.3.role": "Dueña de pyme",
        "testimonials.3.company": "Compras recurrentes",
        "testimonials.3.quote":
            "No necesito más herramientas complicadas. Necesito saber si lo que me facturan coincide con lo que pedí y recibí.",
        "footer.title": "Deja de pagar errores de factura en silencio.",
        "footer.description":
            "Compara pedidos, albaranes y facturas antes de aprobar el pago. Pensado para equipos que necesitan menos revisión manual y discrepancias más claras.",
        "footer.product": "Producto",
        "footer.reconciliation": "Reconciliación",
        "footer.alerts": "Alertas de discrepancia",
        "footer.reviewQueue": "Cola de revisión",
        "footer.company": "Empresa",
        "footer.earlyAccess": "Acceso anticipado",
        "footer.requestDemo": "Solicitar demo",
        "footer.rights": "Todos los derechos reservados.",
        "contactHero.title": "Habla con un experto.",
        "contactHero.description":
            "Cuéntanos tu caso y vemos cómo DenX puede ayudar a tu equipo a detectar discrepancias antes del pago.",
        "contactForm.firstName": "Nombre",
        "contactForm.lastName": "Apellido",
        "contactForm.workEmail": "Email de trabajo",
        "contactForm.companyName": "Empresa",
        "contactForm.message": "Mensaje",
        "contactForm.firstNamePlaceholder": "Jane",
        "contactForm.lastNamePlaceholder": "Doe",
        "contactForm.emailPlaceholder": "jane@empresa.com",
        "contactForm.companyPlaceholder": "Acme Corp",
        "contactForm.messagePlaceholder": "Cuéntanos tus retos con la revisión de facturas...",
        "page.contact": "Contacto",
        "page.login": "Acceder",
        "page.requestAccess": "Solicitar acceso",
    },
} satisfies Record<Language, Record<string, string>>;

export type TranslationKey = keyof typeof translations.en;

export type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    t: (key: TranslationKey) => string;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function getInitialLanguage(): Language {
    const storedLanguage = window.localStorage.getItem("denx-language");

    if (storedLanguage === "en" || storedLanguage === "es") {
        return storedLanguage;
    }

    return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}
