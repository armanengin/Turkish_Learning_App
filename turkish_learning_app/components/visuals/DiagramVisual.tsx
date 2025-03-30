import React from 'react';
import { DiagramData } from '../../types/grammar';

interface DiagramVisualProps {
  data?: DiagramData;
  title: string;
  description?: string;
}

export default function DiagramVisual({ data, title, description }: DiagramVisualProps) {
  if (!data) {
    return (
      <div className="p-4 border rounded-md bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        <p className="mt-4 text-sm text-amber-600">Diagram data not provided</p>
      </div>
    );
  }

  const { nodes, connections, layout = 'flow' } = data;

  // Timeline layout rendering
  if (layout === 'timeline') {
    return (
      <div className="w-full py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        {description && <p className="mt-1 mb-4 text-sm text-gray-500">{description}</p>}
        
        <div className="relative h-52 mb-8 border border-gray-200 p-4 rounded-md">
          {/* Timeline line */}
          <div className="absolute top-1/2 w-full h-1 bg-gray-300"></div>
          
          {/* Timeline points */}
          {nodes.map((node) => {
            const position = typeof node.position === 'number' ? node.position : 50;
            
            return (
              <div 
                key={node.id} 
                className={`absolute top-0 transform -translate-x-1/2 ${node.highlight ? 'z-10' : ''}`}
                style={{ left: `${position}%` }}
              >
                <div 
                  className={`w-4 h-4 rounded-full ${
                    node.highlight ? 'bg-blue-600' : 'bg-blue-400'
                  } mx-auto`}
                ></div>
                <div className="mt-2 p-2 bg-white border rounded-md shadow-sm max-w-[150px]">
                  <p className="text-sm font-medium text-gray-900">{node.label}</p>
                  {node.description && (
                    <p className="text-xs text-gray-500 mt-1">{node.description}</p>
                  )}
                  {node.examples && node.examples.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs italic text-gray-500">{node.examples[0]}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Flow layout rendering
  return (
    <div className="w-full py-6">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      {description && <p className="mt-1 mb-4 text-sm text-gray-500">{description}</p>}
      
      <div className="relative w-full h-[400px] mt-4 bg-white border rounded-md p-4">
        {nodes.map((node) => {
          const xPos = node.position && typeof node.position !== 'number' 
            ? node.position.x 
            : Math.random() * 80 + 10; // 10-90%
          
          const yPos = node.position && typeof node.position !== 'number'
            ? node.position.y
            : Math.random() * 80 + 10; // 10-90%
            
          return (
            <div 
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 border rounded-md ${
                node.highlight ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-300'
              }`}
              style={{ left: `${xPos}%`, top: `${yPos}%`, maxWidth: '180px' }}
            >
              <p className="text-sm font-medium">{node.label}</p>
              {node.description && (
                <p className="text-xs text-gray-500 mt-1">{node.description}</p>
              )}
              {node.examples && node.examples.length > 0 && (
                <p className="text-xs italic mt-1">{node.examples[0]}</p>
              )}
            </div>
          );
        })}

        {/* Note: In a production implementation, we would use SVG for connections */}
        <div className="absolute bottom-0 right-0 text-xs text-gray-400 p-1">
          {connections && connections.length > 0 ? `${connections.length} connections` : 'No connections'}
        </div>
      </div>
    </div>
  );
}
