// Type definitions for importing SVGs as React components with vite-plugin-svgr

// This allows TypeScript to recognize SVG imports ending with ?react

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
