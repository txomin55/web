export default class Game {
    IMAGE_SIZE_WIDTH = 50
    IMAGE_SIZE_HEIGHT = 50
    MIN_WIDTH_NEW_PIPE = 100
    MIN_PIPE_SCORE_VALUE = 5

    constructor (cvs) {
      this.UFO_IMAGE = new Image()
      this.UFO_IMAGE.src = 'images/ufo.png'
      this.BACKGROUND_IMAGE = new Image()
      this.BACKGROUND_IMAGE.src = 'images/background.png'
      this.FOREGROUND_IMAGE = new Image()
      this.FOREGROUND_IMAGE.src = 'images/foreground.png'
      this.PIPE_NORTH_IMAGE = new Image()
      this.PIPE_NORTH_IMAGE.src = 'images/northPipe.png'
      this.PIPE_SOUTH_IMAGE = new Image()
      this.PIPE_SOUTH_IMAGE.src = 'images/southPipe.png'
      this.DISTANCE_BETWEEN_PIPES = this.PIPE_NORTH_IMAGE.height + 100

      this.cvs = cvs
      this.ctx = this.cvs.getContext('2d')
      this.bX = 10
      this.bY = 150

      this.pipes = []
      this.pipes[0] = {
        x: this.cvs.width,
        y: 0
      }

      this.score = 0
    }

    drawPipeNorth (pX, pY) {
      this.ctx.drawImage(this.PIPE_NORTH_IMAGE, pX, pY)
    }

    drawPipeSouth (pX, pY) {
      this.ctx.drawImage(this.PIPE_SOUTH_IMAGE, pX, pY + this.DISTANCE_BETWEEN_PIPES)
    }

    init () {
        debugger // eslint-disable-line

      this.ctx.drawImage(this.BACKGROUND_IMAGE, 0, 0)
      this.ctx.drawImage(this.FOREGROUND_IMAGE, 0, this.cvs.height - this.FOREGROUND_IMAGE.height)
      this.ctx.drawImage(this.UFO_IMAGE, this.bX, this.bY, this.IMAGE_SIZE_WIDTH, this.IMAGE_SIZE_HEIGHT)
    }

    draw () {
        debugger // eslint-disable-line

      this.ctx.drawImage(this.BACKGROUND_IMAGE, 0, 0)
      this.ctx.drawImage(this.FOREGROUND_IMAGE, 0, this.cvs.height - this.FOREGROUND_IMAGE.height)
      this.ctx.drawImage(this.UFO_IMAGE, this.bX, this.bY, this.IMAGE_SIZE_WIDTH, this.IMAGE_SIZE_HEIGHT)

      for (let i = 0; i < this.pipes.length; i++) {
        this.drawPipeNorth(this.pipes[i].x, this.pipes[i].y)
        this.drawPipeSouth(this.pipes[i].x, this.pipes[i].y)

        this.pipes[i].x--

        if (this.pipes[i].x === this.cvs.width - this.MIN_WIDTH_NEW_PIPE) {
          this.pipes.push({
            x: this.cvs.width,
            y: Math.floor(Math.random() * this.PIPE_NORTH_IMAGE.height) - this.PIPE_NORTH_IMAGE.height
          })
        }

        if (
          (
            this.bX + this.UFO_IMAGE.width >= this.pipes[i].x &&
                this.bX <= this.pipes[i].x + this.PIPE_NORTH_IMAGE.width &&
                this.bY <= this.pipes[i].y + this.PIPE_NORTH_IMAGE.height) ||
                this.bY + this.UFO_IMAGE.height >= this.pipes[i].y + this.DISTANCE_BETWEEN_PIPES || this.bY + this.UFO_IMAGE.height >= this.cvs.height - this.FOREGROUND_IMAGE.height
        ) {
          this.restartGame()
        }

        if (this.pipes[i].x === this.MIN_PIPE_SCORE_VALUE) {
          this.score++
        }
      }

      this.ctx.drawImage(this.UFO_IMAGE, this.bX, this.bY)

      this.ctx.fillStyle = 'green'
      this.ctx.font = '20px Verdana'
      this.ctx.fillText(`Score: ${this.score}`, 10, this.cvs.height - 20)

      requestAnimationFrame(this.draw.bind(this))
    }

    restartGame () {
      alert('GAME OVER')
    }

    goUp () {
      this.bY -= 10
    }

    goDown () {
      this.bY += 10
    }

    goRight () {
      this.bX -= 10
    }

    goLeft () {
      this.bX += 10
    }
}
