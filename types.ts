
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Section {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  color: string;
}

export const SECTIONS: Section[] = [
  {
    id: 'hero',
    title: 'GAMES INTERACTIVE',
    description: '',
    position: [0, 0, -10],
    color: '#00ffff'
  },
  {
    id: 'web3',
    title: 'WEB3 NATIVE',
    description: 'Blockchain integration, NFT ecosystems, and decentralized economies.',
    position: [0, 0, -40],
    color: '#ff00ff'
  },
  {
    id: 'unity',
    title: 'UNITY EXPERTS',
    description: 'High-fidelity 3D experiences optimized for all platforms.',
    position: [0, 0, -70],
    color: '#ffff00'
  },
  {
    id: 'multiplayer',
    title: 'MULTIPLAYER',
    description: 'Scalable backend infrastructure for real-time connection.',
    position: [0, 0, -100],
    color: '#00ff00'
  }
];
