import React from 'react';
import { VisualAid } from '../../types/grammar';
import TableVisual from './TableVisual';
import DiagramVisual from './DiagramVisual';
import ChartVisual from './ChartVisual';
import ImageVisual from './ImageVisual';

interface VisualAidRendererProps {
  visualAid: VisualAid;
  className?: string;
}

export default function VisualAidRenderer({ visualAid, className = '' }: VisualAidRendererProps) {
  const renderVisualContent = () => {
    switch (visualAid.type) {
      case 'table':
        return <TableVisual data={visualAid.data} title={visualAid.title} description={visualAid.description} />;
      case 'diagram':
      case 'flowchart':
      case 'mind-map':
        return <DiagramVisual data={visualAid.data} title={visualAid.title} description={visualAid.description} />;
      case 'chart':
      case 'comparison-chart':
        return <ChartVisual data={visualAid.data} title={visualAid.title} description={visualAid.description} />;
      case 'image':
        return <ImageVisual data={visualAid.data} title={visualAid.title} description={visualAid.description} />;
      default:
        return (
          <div className="p-4 border rounded-md bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{visualAid.title}</h3>
            {visualAid.description && <p className="mt-1 text-sm text-gray-500">{visualAid.description}</p>}
            <p className="mt-4 text-sm text-amber-600">Visual content to be implemented</p>
          </div>
        );
    }
  };

  return (
    <div className={`visual-aid-container my-6 ${className}`}>
      {renderVisualContent()}
    </div>
  );
}
