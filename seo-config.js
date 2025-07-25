export const seoConfig = {
  baseUrl: 'https://samsher-buildcon.pages.dev',
  siteName: 'Samsher Buildcon',
  defaultTitle: 'Samsher Buildcon - Premier Construction Services',
  defaultDescription: 'Leading construction company providing quality building services, infrastructure development, and project management solutions.',
  defaultImage: '/images/samsher-buildcon-og.svg',
  defaultImageAlt: 'Samsher Buildcon - Premier Construction Services',
  twitterHandle: '@samsherbuildcon',
  language: 'en',
  locale: 'en_US',
  
  pages: {
    '/': {
      title: 'Samsher Buildcon - Premier Construction Services',
      description: 'Leading construction company providing quality building services, infrastructure development, and project management solutions. Expert construction, infrastructure development, and project management.',
      keywords: 'construction company, building services, infrastructure development, project management, quality construction, buildcon, construction contractor, building contractor',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Samsher Buildcon",
        "description": "Leading construction company providing quality building services, infrastructure development, and project management solutions.",
        "url": "https://samsher-buildcon.pages.dev",
        "logo": "https://samsher-buildcon.pages.dev/buildcon%20header.svg",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["English", "Hindi"]
        },
        "serviceArea": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Building Construction",
                "description": "Complete building construction services"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Infrastructure Development",
                "description": "Infrastructure development and project management"
              }
            }
          ]
        },
        "sameAs": []
      }
    },
    '/hse-policy': {
      title: 'HSE Policy - Health, Safety & Environmental Excellence | Samsher Buildcon',
      description: 'Our comprehensive Health, Safety, and Environmental (HSE) policy demonstrating commitment to QHSE excellence in construction projects. Zero accidents, environmental protection, and quality assurance.',
      keywords: 'HSE policy, QHSE, health safety environment, construction safety, workplace safety, environmental protection, safety management, quality assurance, zero accidents',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "HSE Policy - Health, Safety & Environmental Excellence",
        "description": "Our comprehensive Health, Safety, and Environmental policy demonstrating our commitment to excellence in all construction projects and operations.",
        "url": "https://samsher-buildcon.pages.dev/hse-policy",
        "mainEntity": {
          "@type": "Policy",
          "name": "Health, Safety & Environmental Policy",
          "description": "Comprehensive QHSE policy ensuring quality, health, safety, and environmental protection in construction operations",
          "publisher": {
            "@type": "Organization",
            "name": "Samsher Buildcon"
          }
        },
        "isPartOf": {
          "@type": "WebSite",
          "name": "Samsher Buildcon",
          "url": "https://samsher-buildcon.pages.dev"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://samsher-buildcon.pages.dev"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "HSE Policy",
              "item": "https://samsher-buildcon.pages.dev/hse-policy"
            }
          ]
        }
      }
    }
  },
  
  // Social media and additional SEO settings
  social: {
    twitter: '@samsherbuildcon',
    facebook: 'samsherbuildcon',
    linkedin: 'company/samsher-buildcon',
    instagram: 'samsherbuildcon'
  },
  
  // Additional SEO optimizations
  features: {
    enableStructuredData: true,
    enableOpenGraph: true,
    enableTwitterCards: true,
    enableCanonicalUrls: true,
    enableSitemap: true,
    enableRobotsTxt: true,
    enableImageSitemap: true
  },
  
  // Performance and technical SEO
  technical: {
    enablePreload: true,
    enablePrefetch: true,
    enableDNSPrefetch: true,
    enablePreconnect: true,
    compressionEnabled: true,
    minifyEnabled: true
  }
};