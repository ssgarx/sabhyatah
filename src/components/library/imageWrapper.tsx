"use client"
import React, { useState } from "react"
import Image, { ImageProps } from "next/image"
import classNames from "classnames"

interface ImageWrapperProps extends ImageProps {
  fallbackUrl?: string
  darkSrc?: string
}

export default function ImageWrapper({
  src,
  fallbackUrl,
  darkSrc,
  alt = "",
  className,
  ...rest
}: ImageWrapperProps) {
  const [isError, setIsError] = useState(false)
  const fill = rest.fill ?? !rest.width

  const handleError = () => setIsError(true)
  return (
    <>
      <Image
        src={isError && fallbackUrl ? fallbackUrl : src}
        alt={alt}
        onError={handleError}
        fill={fill}
        className={classNames(className, darkSrc && "block dark:hidden")}
        sizes="100%"
        {...rest}
      />
      {darkSrc && (
        <Image
          src={isError && fallbackUrl ? fallbackUrl : darkSrc}
          alt={alt}
          onError={handleError}
          fill={fill}
          className={classNames(className, "hidden dark:block")}
          sizes="100%"
          {...rest}
        />
      )}
    </>
  )
}
