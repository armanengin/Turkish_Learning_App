import React from 'react';
import { ImageData } from '../../types/grammar';
import Image from 'next/image';

interface ImageVisualProps {
  data?: ImageData;
  title: string;
  description?: string;
}

export default function ImageVisual({ data, title, description }: ImageVisualProps) {
  if (!data) {
    return (
      <div className="p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        <p className="mt-4 text-sm text-amber-600">Image data not provided</p>
      </div>
    );
  }

  const { src, alt, caption, hotspots } = data;

  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      {description && <p className="mt-1 mb-2 text-sm text-gray-500">{description}</p>}
      
      <div className="relative mt-2 mx-auto max-w-xl">
        <div className="relative aspect-auto rounded-md overflow-hidden">
          <Image 
            src={src}
            alt={alt}
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            style={{ maxHeight: '400px' }}
          />
          
          {/* Hotspots */}
          {hotspots && hotspots.map((hotspot, index) => (
            <div
              key={index}
              className="absolute w-6 h-6 rounded-full bg-blue-500 bg-opacity-70 flex items-center justify-center cursor-pointer hover:bg-blue-600 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              title={hotspot.description}
            >
              <span className="text-white text-xs font-bold">{index + 1}</span>
              
              {/* Tooltip - would be fully interactive in production with proper hover states */}
              <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-white shadow-lg rounded-md w-48 z-10">
                <p className="text-sm font-medium">{hotspot.label}</p>
                <p className="text-xs text-gray-600">{hotspot.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {caption && (
          <p className="mt-2 text-sm text-center text-gray-500 italic">{caption}</p>
        )}
      </div>
    </div>
  );
}
