import Head from "next/head"
import React from "react"

interface SeoProps {
  title?: string
  description?: string
  canonical?: string
  homeImageUrl?: string
  siteName?: string
  locale?: string
  ogImagePath?: string
  ogImageWidth?: string
  ogImageHeight?: string
  ogType?: string
  twitterCardContent?: string
}

export default function Seo({
  title,
  description,
  canonical,
  homeImageUrl,
  siteName,
  locale,
  ogImagePath,
  ogImageWidth,
  ogImageHeight,
  ogType,
  twitterCardContent,
}: SeoProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {title && (
        <>
          {<title key="title">{title}</title>}
          {<meta key="og_title" property="og:title" content={title} />}
          {<meta key="twitter_title" name="twitter:title" content={title} />}
        </>
      )}

      {description && (
        <>
          {<meta key="description" name="description" content={description} />}
          {
            <meta
              key="og_description"
              property="og:description"
              content={description}
            />
          }
          {
            <meta
              key="twitter_description"
              name="twitter:description"
              content={description}
            />
          }
        </>
      )}

      {canonical && (
        <>
          {<link key="canonical" rel="canonical" href={canonical} />}
          {<meta key="og_canonical" property="og:url" content={canonical} />}
          {
            <meta
              key="twitter_canonical"
              name="twitter:url"
              content={canonical}
            />
          }
        </>
      )}

      {homeImageUrl && (
        <>
          {
            <meta
              key="homeImageUrl"
              property="og:image"
              content={homeImageUrl}
            />
          }
          {
            <meta
              key="url_homeImageUrl"
              property="og:image:url"
              content={homeImageUrl}
            />
          }
          {
            <meta
              key="secure_url_homeImageUrl"
              property="og:image:secure_url"
              content={homeImageUrl}
            />
          }
          {
            <meta
              key="twitter_homeImageUrl"
              name="twitter:image"
              content={homeImageUrl}
            />
          }
        </>
      )}

      {ogType && <meta key={"ogType"} property="og:type" content={ogType} />}
      {siteName && (
        <meta key={"siteName"} property="og:site_name" content={siteName} />
      )}
      {locale && <meta key={"locale"} property="og:locale" content={locale} />}
      {ogImagePath && (
        <meta
          key={"ogImagePath"}
          property="og:image:type"
          content={ogImagePath}
        />
      )}
      {ogImageWidth && (
        <meta
          key={"ogImageWidth"}
          property="og:image:width"
          content={ogImageWidth}
        />
      )}
      {ogImageHeight && (
        <meta
          key={"ogImageHeight"}
          property="og:image:height"
          content={ogImageHeight}
        />
      )}
      {twitterCardContent && (
        <meta
          key={"twitterCardContent"}
          name="twitter:card"
          content={twitterCardContent}
        />
      )}
    </Head>
  )
}
