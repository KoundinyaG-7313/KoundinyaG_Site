import React from 'react';
import katex from 'katex';

interface MathBlockProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({ latex, displayMode = true, className = '' }) => {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
    });
  } catch (error) {
    html = `<span class="text-red-400 font-mono text-xs">${latex}</span>`;
  }

  return (
    <div 
      className={`overflow-x-auto my-2 text-emerald-300 font-serif ${displayMode ? 'text-center py-2' : 'inline-block'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
