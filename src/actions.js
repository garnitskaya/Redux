export const inc = () => ({ type: 'INC' });//action creator
export const dec = () => ({ type: 'DEC' });//action creator
export const rnd = () => ({ type: 'RND', payload: Math.floor(Math.random() * 10) });//action creator