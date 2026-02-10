import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = "AI website building, web app development, custom software, AstraIX, artificial intelligence, automated coding, enterprise software",
    image = "/astraix-logo.svg",
    url = "https://astraix.com",
    type = "website"
}) => {
    const siteTitle = `${title} | AstraIX - Future of AI Development`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) for Organization */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "AstraIX",
                    "url": "https://astraix.com",
                    "logo": "https://astraix.com/astraix-logo.svg",
                    "description": "AstraIX specializes in AI-powered website building and custom web app development for the future.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "1200 Innovation Blvd, Suite 400",
                        "addressLocality": "San Francisco",
                        "addressRegion": "CA",
                        "postalCode": "94103",
                        "addressCountry": "US"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-7309251383",
                        "contactType": "sales",
                        "areaServed": ["US", "EU", "World"],
                        "availableLanguage": "English"
                    },
                    "sameAs": [
                        "https://wa.me/917309251383"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
