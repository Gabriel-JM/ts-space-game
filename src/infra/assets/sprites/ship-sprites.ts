import { spritesMap } from './sprites-map.js'

export const ship = [
  [0,0,0,2,2,0,0,0],
  [0,0,2,8,8,2,0,0],
  [0,0,2,8,8,2,0,0],
  [0,2,8,8,8,8,2,0],
  [2,8,8,12,12,8,8,2],
  [2,8,8,12,6,8,8,2],
  [0,2,8,5,5,8,2,0],
  [0,0,2,9,9,2,0,0]
]

export const leftShip = [
  [0,0,0,2,2,0,0,0],
  [0,0,2,8,8,2,0,0],
  [0,0,2,8,8,2,0,0],
  [0,0,2,8,8,8,2,0],
  [0,2,12,12,8,8,2,0],
  [0,2,12,6,8,8,2,0],
  [0,2,5,5,8,8,2,0],
  [0,0,2,9,9,2,0,0]
]

spritesMap.set(1, leftShip)
spritesMap.set(2, ship)
