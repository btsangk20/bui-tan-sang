import React from 'react';

export interface RouteConfig {
  path: string;
  label: string;
  key: string;
  element: React.ReactNode;
}
