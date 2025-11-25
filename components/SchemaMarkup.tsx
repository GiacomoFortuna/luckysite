import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "LuckySite",
    "image": "https://luckysite.agency/logo.png",
    "description": "Agenzia web specializzata in siti web ultra-veloci e creazione contenuti video con Intelligenza Artificiale.",
    "url": "https://luckysite.agency",
    "telephone": "+39123456789",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via dell'Innovazione 10",
      "addressLocality": "Milano",
      "postalCode": "20100",
      "addressCountry": "IT"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;