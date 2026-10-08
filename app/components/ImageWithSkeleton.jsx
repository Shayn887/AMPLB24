"use client";

import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  containerClassName = "",
  fill,
  isSelected = false,
  iconClassName = "w-8 h-8 text-slate-400",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!src) {
      setIsLoading(false);
      setHasError(true);
      return;
    }
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
    }
  }, [shouldLoad, src]);

  // Jika tidak ada URL foto atau gambar error, tampilkan Icon User
  if (!src || hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-200/80 ${
          fill || isSelected ? "w-full h-full" : ""
        } ${containerClassName}`}
      >
        <User className={iconClassName} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${
        fill || isSelected ? "w-full h-full" : ""
      } ${containerClassName}`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center z-10 w-full h-full">
          <div className="w-6 h-6 border-2 border-emerald-500/20 border-t-pink-500 rounded-full animate-spin" />
        </div>
      )}

      {shouldLoad && (
        <img
          ref={imgRef}
          src={src}
          alt={alt || "Image"}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={`transition-opacity duration-300 ease-in-out ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${
            isSelected
              ? "w-full h-full object-cover object-center block"
              : fill
                ? "w-full h-full object-cover"
                : ""
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
}