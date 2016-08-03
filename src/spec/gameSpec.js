'use strict'

import { Game } from '../public/game.js'

describe('Game', function() {
  it('can get initialized', function() {
    let g = new Game()
    expect(g.board).toEqual('.........');
  })
})
