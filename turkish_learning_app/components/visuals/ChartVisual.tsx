import React from 'react';
import { ChartData } from '../../types/grammar';

interface ChartVisualProps {
  data?: ChartData;
  title: string;
  description?: string;
}

export default function ChartVisual({ data, title, description }: ChartVisualProps) {
  if (!data) {
    return (
      <div className="p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        <p className="mt-4 text-sm text-amber-600">Chart data not provided</p>
      </div>
    );
  }

  // For production, you would use a chart library like Chart.js or Recharts
  // This is a basic implementation for demonstration
  return (
    <div className="p-4 border rounded-md bg-gray-50">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
      
      <div className="mt-4 p-4 bg-white border rounded-md">
        <div className="text-center mb-4 text-sm font-medium text-gray-700">
          {data.type.charAt(0).toUpperCase() + data.type.slice(1)} Chart
        </div>
        
        {data.type === 'bar' && (
          <div className="h-60 flex items-end justify-around gap-2 px-6">
            {data.labels.map((label, index) => {
              const value = data.datasets[0]?.data[index] || 0;
              const maxValue = Math.max(...data.datasets[0]?.data || [1]);
              const height = (value / maxValue) * 100;
              const backgroundColor = Array.isArray(data.datasets[0]?.backgroundColor) 
                ? data.datasets[0]?.backgroundColor[index] 
                : data.datasets[0]?.backgroundColor || '#3b82f6';
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 rounded-t"
                    style={{ 
                      height: `${height}%`,
                      backgroundColor
                    }}
                  ></div>
                  <div className="text-xs mt-2 text-center w-16 truncate" title={label}>{label}</div>
                  <div className="text-xs font-medium">{value}</div>
                </div>
              );
            })}
          </div>
        )}
        
        {data.type === 'pie' && (
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full border border-gray-200 relative">
              {data.datasets[0]?.data.map((value, index) => {
                const total = data.datasets[0]?.data.reduce((sum, val) => sum + val, 0) || 1;
                const percentage = (value / total) * 100;
                const backgroundColor = Array.isArray(data.datasets[0]?.backgroundColor) 
                  ? data.datasets[0]?.backgroundColor[index]
                  : data.datasets[0]?.backgroundColor || '#3b82f6';
                
                // This is a simplified visualization - in production use a proper chart library
                return (
                  <div key={index} className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 mr-2"
                        style={{ backgroundColor }}
                      ></div>
                      <span className="text-xs">{data.labels[index]}</span>
                    </div>
                    <span className="text-xs">{percentage.toFixed(1)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {data.datasets.map((dataset, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1"
                style={{ 
                  backgroundColor: Array.isArray(dataset.backgroundColor) 
                    ? dataset.backgroundColor[0] 
                    : dataset.backgroundColor || '#3b82f6'
                }}
              ></div>
              <span className="text-xs">{dataset.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
