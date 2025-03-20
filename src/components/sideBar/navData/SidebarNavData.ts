import { FileChartLine, Stethoscope, LayoutDashboard } from 'lucide-react';
import { NavigationArray } from '../types/navigationItemTypes';

//  This contains sidebar navigation items.
// use lowercase when setting url paths
// use Lucide react JSX icons as icons
//  use - in url path when there is more than one word in the path segment
//  name : Financial Reports     ----->  path: /doctor/financial-reports

export const data: NavigationArray = [
  {
    type: 'sub',
    title: 'Reports',
    url: '',
    icon: FileChartLine,
    isActive: true,
    items: [
      {
        name: 'Appointment Reports',
        url: '/doctor/appointment-reports',
      },
      {
        name: 'Patient Reports',
        url: '/doctor/patient-reports',
      },
      {
        name: 'Financial Reports',
        url: '/doctor/financial-reports',
      },
    ],
  },
  {
    type: 'main',
    name: 'Overview',
    url: '/doctor',
    icon: LayoutDashboard,
  },
  {
    type: 'main',
    name: 'Examination',
    url: '/doctor/examination',
    icon: Stethoscope,
  },
];
