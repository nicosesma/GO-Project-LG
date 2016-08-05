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

  it('#makeBestMove returns false when board is full', () => {
    let g = new Game()
    g.board = 'ABCDEFGHI'
    expect(g.makeBestMove()).toEqual(false)
  })

  it('#makeBestMove returns true and actually makes the (dumb for now) move when board is not full', () => {
    let g = new Game()
    g.board = 'ABCD.FGHI'
    expect(g.makeBestMove()).toEqual(true)
    expect(g.board).toEqual('ABCDXFGHI')
  })

  it('#autoPlay can play to the end to create a full board', () => {
    let g = new Game()
    g.autoPlay()
    expect(g.board).toEqual('XOXOXOXOX')
  })

  it('#gameOver stops when board is full', () => {
    let g = new Game()
    g.board = 'XOXOXOXOX'
    expect(g.gameOver()).toEqual(true)
    g.board = 'XOXOXOXO.'
    expect(g.gameOver()).toEqual(false)
  })
})
