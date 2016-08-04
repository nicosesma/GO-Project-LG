describe('Game', () => {
  it('gets initialized', () => {
    let g = new Game()
    g.board === '.........'
  })

  it('#place works', () => {
    let g = new Game()
    g.place(3)
    g.place(8)
    g.place(0)
    expect(g.board).toEqual('X..X....O')
  })
})
