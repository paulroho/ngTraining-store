import { Artist } from './artist';
import { Track } from './track';

export const getSampleTracks: () => Track[] = () => [
  {
    id: 1,
    title: 'Come as you are',
    artist: {name: 'Nirvana'}
  },
  {
    id: 2,
    title: 'Smells like Teen Spirit',
    artist: {name: 'Nirvana'}
  },
  {
    id: 3,
    title: 'Another One Bites The Dust',
    artist: {name: 'Queen'}
  },
  {
    id: 4,
    title: 'We are the Champions',
    artist: {name: 'Queen'}
  },
  {
    id: 5,
    title: 'I want to break free',
    artist: {name: 'Queen'}
  },
  {
    id: 6,
    title: 'Hurt',
    artist: {name: 'Johnny Cash'}
  },
  {
    id: 7,
    title: 'I walk the line',
    artist: {name: 'Johnny Cash'}
  }
];
